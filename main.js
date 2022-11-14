 $(".get_date_to").on('change', function () {
    var get_date_to = new Date($(this).val());
    var get_date_from = new Date($(".get_date_from").val());
    var date_dif = get_date_to.getTime() - get_date_from.getTime();
    var num_of_days = Math.abs(date_dif / (1000 * 3600 * 24));
    $(".num_of_days").val(num_of_days);
});
