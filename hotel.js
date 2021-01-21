function hotelCost(days)
{
    var totalexpense= 0;
    
    //first 10 days expense

    if (days <= 10)
    {
       totalexpense = days * 100;
    }

   // second 10 days expense

    else if (days <= 20)
    {
        var first10days = 10 * 100;
        var remaining = days - 10;
        var second10days = remaining * 80;
       totalexpense= first10Days + second10days;

    }
    //after 20 days total expense

    else
    {
        var first10days = 10 * 100;
        var second10days = 10 * 80;
        var remaining = days - 20;
        var othersDays = remaining * 50;
        totalexpense = first10days + second10days + othersDays;
    }
    return totalexpense;
}