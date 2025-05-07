(function () {
    const config = {
        profit: "+97%",
        rank: "#7"
    };

    function updateProfitAndRank() {
        document.querySelectorAll('[class*="profit"], [class*="Profit"]').forEach(el => {
            el.innerText = config.profit;
            el.style.color = "#00ff90";
            el.style.fontWeight = "bold";
        });

        document.querySelectorAll('[class*="rank"], [class*="Rank"]').forEach(el => {
            el.innerText = config.rank;
            el.style.color = "#00ff90";
            el.style.fontWeight = "bold";
        });
    }

    updateProfitAndRank();
    setInterval(updateProfitAndRank, 3000);
})();
