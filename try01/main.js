

var MarketYard ={
	currentPageModule:"dashboard",
	init:function(){
		this.hideAllPage();
		this.showSpecificModule();
		return true;
	},
	todaysTransactionClickHandler:function(){
		this.currentPageModule = "startTransactionPage";
		//navigate to module page
		this.hideAllPage();
		this.showSpecificModule();
	},
	dashboardClickHandler :function(){
		var moduleName=$(event.target).attr("id")
		this.currentPageModule = moduleName;
		//navigate to module page
		this.hideAllPage();
		this.showSpecificModule();
	},
	hideAllPage:function(){
		var hiddenPageCode ="hideMeMan";
		$("."+hiddenPageCode).hide();

	},
	showSpecificModule:function(moduleName){
	
		var modulePageMapping ={
			"dashboard":"dashboard",
			"customerInfo":"",
			"farmerInfo":"",
			"dailyTransaction":"dailyTransactionPage",
			"businessAnalysis":"",
			"marketYardConfig":"",
			"startTransactionPage":"startTransactionPage"
		};

		var val = modulePageMapping[this.currentPageModule];
		if(val){
			$("#"+val).show();
		}
	}
}

$(document).ready(function(){
	ko.applyBindings(MarketYard);
	MarketYard.init();
	
	
})