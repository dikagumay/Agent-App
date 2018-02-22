var AppsLog = {};
var AnalyticsLog = {};

AppsLog.log = function(message)
{
	/*console.log("begin");
	console.log(message);
	console.log("end");*/
	console.log(message);
}

var pageMapping = {
		"prudential.persistency.inq.grp" :"Persistency Inquiry Group",
		"prudential.persistency.inq.indv" :"Persistency Inquiry Individu",
		"prudential.persistency.inq.unit" :"Persistency Inquiry Unit",
		"prudential.persistency.indv.dtl" :"Persistency Individu Detail",
		"prudential.persistency.indv.dtl.unit" :"Persistency Individu Detail By Unit",
		"prudential.persistency.dtl.grp" :"Persistency Detail Group",
		
		"prudential.production.inq.indv" :"Production Inquiry Individu",
		"prudential.production.inq.unit" :"Production Inquiry Unit",
		"prudential.production.list.indv.unit" :"Production Individu List By Unit",
		"prudential.production.list.unit":"Production List Unit",
		"prudential.production.dtl.indv":"Production Individu Detail",
		"prudential.production.dtl.indv.unit":"Production Individu Detail By Unit",
		
		"prudential.comission.est.inq":"Comission Estimation Inquiry",

		"prudential.faq":			"FAQ",
		"prudential.login":			"Login",
		"prudential.settings":			"Settings",
		"prudential.settings.widget":			"Widget Settings",
		"prudential.process.login":			"Login Process",
		"prudential.forget.pass":			"Forget Password",
		"prudential.process.login":			"Logout Process",
		"prudential.inbox.notification":			"Inbox Notification",

		"prudential.public.about":			"Public Page About",
		"prudential.public.agencyoffice":			"Public Page Agency Office",
		"prudential.public.hospital":			"Public Page Hospital",

		"prudential.aob.new.recruitment":			"Agent New Recruitment",
		"prudential.aob.list.recruitment":			"Agent Recruitment List",
		"prudential.aob.retake.aaji":			"Agent Retake AAJI",
		
		"prudential.register.agent.nosfaid":			"Register PRUforce ID - Agent - No SFA ID",
		"prudential.register.agent.sfaid":			"Register PRUforce ID - Agent - SFA ID",
		"prudential.register.candidates":			"Register PRUforce ID - Candidates",
		"prudential.register.landing":			"Register PRUforce ID - Landing",
		"prudential.forget.userid":			"Forget PRUforce ID"
		
};


AnalyticsLog.logPage = function (pageId)
{
	var pageName = pageMapping[pageId];
	
	WL.Analytics.log({page: pageName}, "visit "+pageName);
	WL.Analytics.send();
}

AnalyticsLog.logSubmission = function (submissionService)
{
	var submissionServiceName = "";
	
	if ("prudential.aob" === submissionService){
		submissionServiceName = "AOB Submission"
	}
	
	WL.Analytics.log({page: submissionServiceName}, "submit");
	WL.Analytics.send();
}

AnalyticsLog.logAgentCodeLogin = function (agentCode)
{
	WL.Analytics.log({loginAGcode: agentCode}, "login");
	WL.Analytics.send();
}