
//config
var EmailSupport = 'AgencyAdmin.Helpdesk@prudential.co.id';

var pagesHistory = [];
var currentPage = {};
var path = "";
var PEOPLE_COLLECTION_NAME = 'Candidate',
	AGENT_COLLECTION_NAME = 'Agent',
	MASTER_DATA_COLLECTION_NAME = 'MasterData',
	KEY_VALUE_COLLECTION_NAME = 'keyvalue';
var COLLECTION_FAST_START = 'FastStart', KEY_ = 'keyvalue';
var COLLECTION_FAST_START_CITY = 'FastStartCity';
var COLLECTION_REC_EXAM = 'RecExam';
var COLLECTION_AMLTRAINING = 'AMLTraining', KEY_ = 'keyvalue';
var COLLECTION_AGENTJOURNEY = 'AgentJourney';
var COLLECTION_LISTBANK = 'Bank';
var COLLECTION_OFFICE = 'OfficeAgent';
var COLLECTION_PROVINCE = 'Province';
var COLLECTION_PROVINCEB = 'ProvinceBak';
var COLLECTION_LISTBANKB= 'BankBak';
var COLLECTION_OFFICEB = 'OfficeAgentBak';
var COLLECTION_SESSION = 'Session';
var COLLECTION_INBOX = 'Message';
var COLLECTION_CANDIDATE_FILES = 'CandidateFiles';
var COLLECTION_APPLICATION_FLAG = 'ApplicationFlag';
var COLLECTION_ID = 'Uname';
var COLLECTION_AGENTJOURNEY_NEW = 'AgentJourney';

var COLLECTION_LISTINDIVIDU = 'Individu';
var COLLECTION_LISTPRODUCTIONUNIT = 'ProductionUnit';
var COLLECTION_LISTCOMISSIONESTIMATION = 'ComissionEstimation';
var COLLECTION_COMISSIONESTIMATION = 'ComissionEstimate';

var COLLECTION_MTDUnitProduction = 'MTDUnitProduction';
var COLLECTION_MTDIndividuProduction = 'MTDIndividuProduction';
var COLLECTION_IndividuPersistencyGraph = 'IndividuPersistencyGraph';
var COLLECTION_LISTPERSISTENCYUNIT = 'PersistencyUnit';
var COLLECTION_LISTACHIEVEMENTUNIT = 'AchievementUnit';
var COLLECTION_LISTGROUPPERSISTENCY = 'GroupPersistency';
var COLLECTION_LISTPERSISTENCYINDIVIDU = 'IndividuPersistency';
var COLLECTION_LISTACHIEVEMENTINDIVIDU = 'AchievementIndividu';
var COLLECTION_YTDUnitProduction = 'YTDUnitProduction';
var COLLECTION_PERMITTED = 'UserPermitted';
var uname = 'admin';
var pswd = 'admin123';
var codearea = [{'id':'21'},{'id':'22'},{'id':'24'},{'id':'31'},{'id':'61'}];
var g_agentdetail = {};
var g_leaderdetail = {};
var g_candidate = {};
var g_candidatedetail = {};
var g_listcandidateupdate = [];
var g_candidatedata = {};
var g_recexam = {};
var aml_score = '';
var npa_verify = {};
var npa_verify_fp = {};
var agentcode_verify = {};
var agentcode_verify_fp = {};
var pruforceid_temp = {};
var pruforceid_fp = '';
var g_faststartschedule = {};
var g_faststartscheduledetail = {};
var g_faststartschedule_city = {};
var SQ = {};
var SQFP = {};
//var g_amltrainingmaterial = [];
var flag_amltraining = 'N';
var AMLT ='';
var g_npa = '';
var g_agent = '';
var g_recagent = '';
var listBank = [];
var T3583 = {}, T3582 = {}, T3692 = {}, T5696 = {}, TT518 = {}, TI028 = {}, T3571 = {}, TI183 = {}, TI181 = {}, MSTBABRPF = {}, NPWPSTATUS = {};
var T3583_ = [], T3582_ = [], T3692_ = [], T5696_ = [], TT518_ = [], TI028_A = {}, TI028_B = [], T3571_ = [], TI183_ = [], TI181_ = [], MSTBABRPF_ = [], NPWPSTATUS_ = [];
var candidateid, candidatename = '', type = '', status = '', candidateidexipredstatus = '', scoreRecExam = '';
var aajischeduleid = '', aajidate = '', aajiagentcode = null, aajistatusagent = '';
var fstscheduleid = '', fstagentcode = '', fstcouseCode = '', faststarttype = '', faststartdate = '', fstdescription = ''; city = '';
var sum = '';
var g_agentjourney = {};
var g_agentjourneykodeetik = {};
var ListBank = [];
var g_masterdata = {};
var ListOffice = [];
var statusDocument = '';
var ListProvince = [];
var ListComission = [];
var g_status_signature = '', g_status_leader = '';
var g_agentcode = '', g_statusagentcode = '', g_spouseagentcode = '', g_statusspouseagentcode = '', g_leaderspouseagentcode = '', g_leaderagentcode = '';
var agen_value = '';
var g_imageDataRek = '', g_imageDataPasFoto = '', g_imageDataNPWP = '', g_imageDataKTP = '', g_imageDataKTPRec = '';g_imageDataBB = '';g_imageDataSR = '';
var counter_setuju=0;
var licenseType = '';
var flagLicenseCodeReTaker = false;
var DTETRM = '';
var fasttype = '';aajilocation = '';
var username = '';
var pwd = '';
var name = '', txtCandidateDOB = '', txtCandidateIDCardNo = '', txtCandidateEmail = '', txtCandidatePhoneNo = '', npanumber = '';
var flagA = 'N';
var flagB = 'N';
var flagC = 'N';
var flagD = 'N';
var flagE = 'N';
var flagF = 'N';
var candidatetitle = '';
var _idjson = '';
var g_listcandidate = {};
var g_candidateprovince = '';
var g_candidateofficecode = '';
var g_candidateprovince_str = '';
var g_npwpprovince = '';
var g_npwpprovince_str = '';
var g_candidateofficecode = '';
var g_candidateofficecode_str = '';
var g_bankname = '';
var g_bankname_str = '';
var g_signature_candidate = '';
var g_signature_recruiter = '';
var g_signature_recruiter_notif = '';
var g_signature_leader = '';
var g_signature_newleader = '';
var signature_candidate = '';
var signature_recruiter = '';
var signature_recruiter_notif = '';
var signature_leader = '';
var signature_newleader = '';
var g_candidateidexpired = '';
var g_upload = [];
var utype = '', flagSignature = false, status_agent = '';
var fPribadi = '',fRekening ='',fPajak='',fKeluarga='',fAgen='',fFStart='';
var IsExist = false;
var ParamPN = {};
var kprovince = '',knpwpprov='',kbank='',koffice='';
var efaststartcourse='', efaststartcoursecode='', efaststartlocation='', efaststartscheduleid='', efaststartstartdate='', efaststarttype=''; //untuk global param get faststart
var eaajiexamdate='', eaajiexamlocation='', eaajiexamscheduleid=''; //untuk global param get aaji
var eacc1='',eacc2='',eacc3='',eacc4='';
//var question = null;
var aajiid = '', aajistartdate = '';
var g_faststartscheduleagent = [], g_aajischeduleagent = [];
var g_listCandidateAgent = [], g_listCandidateAgentAll = [];
var g_agentjourney_id = '';
var dtAMLTraining = [{"headStatus" :"Pengaturan & Kode Etik Perusahaan", "agentJourneyList":[{"tailStatus" : "Materi Training", "createdate": new Date()},{"tailStatus" : "Ujian Pengaturan & Kode Etik Perusahaan", "createdate": new Date()}]}];
var idleTime = 0;
var longTime = 60000; // 1 minute
var networkTimeout = 5;
var statusAML = false;
var AML= {};
var g_countagentjourney = 0;
var g_countrecexam = 0;
var g_inbox = {};
var id_inbox = '';

var alertRekrut = '', kandidat1 ='', email1='', email2='';
var icon_inbox = '';


var valid_x01 = true;
var valid_lp = [false,false,false];
var valid_all_lp = false;
var valid_cek = [false,false]; // yes no
var valid_ap = [false,false,false,false,false,false,false,false,false];
var nama_kandidat='';

var statusCandidateProvince = false;
var statusNamaBank = false;
var statusNPWPProvince = false;
var statusKodeBank = false;
var flagAAJISchedule = false;

var applicationFlag =[];

var ag_received = '';
var g_scorerecexam = '';
var g_reason = '';
var pendingdesc = '';
var flagPending = '';
var SubmitFromRecruiter = false;
var g_createdate = '';
var tglsubmit = '';
var type = '';
var countFastStartRegistration = '';
var aajilicensecode = '';
var aajiexamresult = '';
var statusregisteraaji = false;
var SubmitStatus = '';
var SubmitStatusSign = '';
var reqId = '';
var statusworkinsurance = false;
var statusretaker = false;
var isULI = false;
var isValidLicense = false;
var isNotValidLicenseDate = false;
var msgDataCandidate = '';

// size  5 for testing ;

var size = 30;
var page= 1;
var searchBy ='';
var searchVal ='';
var searchBy2 ='';
var searchVal2 ='';
var orderBy ='';
var direction ='asc';
var agentNumberClickByUser = '';
var flagingForJsonWithParams = false;
var flagingAlwaysOnline = false;

var filterPublicInformationSearch = '';
var filterCityCode = '';

var busyIndicator = {};
var flagPermitted = false;
var ListPermitted = [];
var versionApps = WL.Client.getAppProperty("APP_VERSION");

busyIndicator.show = function()
{
	$('.load-spinner').addClass('show');
	return true;
}

busyIndicator.hide = function()
{
	$('.load-spinner').removeClass('show');
	return true;
}
function wlCommonInit(){
	/*busyIndicator = new WL.BusyIndicator("MainContent", {text : 'Downloading Data...', boxLength: 255.5});*/
//	loadMoreIndicator = new WL.BusyIndicator("MainContent", {text : 'Load More...', boxLength: 255.5});

	/*
	 * Use of WL.Client.connect() API before any connectivity to a MobileFirst Server is required. 
	 * This API should be called only once, before any other WL.Client methods that communicate with the MobileFirst Server.
	 * Don't forget to specify and implement onSuccess and onFailure callback functions	 *    
	 *    WL.Client.connect({
	 *    		onSuccess: onConnectSuccess,
	 *    		onFailure: onConnectFailure
	 *    });
	 *     
	 */
	document.addEventListener("deviceready", onDeviceReady, false);
	
	WL.Logger.debug("<<< main.js->wlCommonInit() >>>");		
	WL.Client.connect({
	    onSuccess: onConnectSuccess,
	    onFailure: onConnectFailure
	});
	
	
	
	// Common initialization code goes here
	initMain();
}

function initMain()
{
	console.log("masuk dong");
	closeConnection();
	
	Init(uname,pswd);
	persistence.options = persistence.getOptions(uname,pswd);
	persistence.AAJI.store.init();
	 	
	utype = '';
	username = '';
	pwd = '';
	g_candidate = {};
	g_candidatedetail = {};
	g_candidatedata = {};
	g_agentdetail = {};
	g_inbox = {};
	g_upload = [];
}

function onConnectSuccess(response){
	WL.Logger.debug("<<< main.js->onConnectSuccess(response) >>>" + JSON.stringify(response));
	//alert("clien konek server");
	}

function onConnectFailure(response){
	WL.Logger.debug("<<< main.js->onConnectFailure(response) >>>" + JSON.stringify(response));
	//alert("clien tidak konek server");
}

/*wl_directUpdateChallengeHandler.handleDirectUpdate = function(directUpdateData, directUpdateContext) {
	// custom WL.SimpleDialog for Direct Update
	var customDialogTitle = 'Update Available';
	var customDialogMessage = 'Press update button to download';
	var customButtonText1 = 'Update Application';
	var customButtonText2 = 'Not Now';
	
	    WL.SimpleDialog.show(customDialogTitle, customDialogMessage, 
	        [{
	            text : customButtonText1,
	            handler : function() {
	                directUpdateContext.start();
	            }
	        },
	        {
	            text : customButtonText2,
	            handler : function() {
	                wl_directUpdateChallengeHandler.submitFailure();
	            }
	        }]
	    );
	};*/

function onDeviceReady() {
	document.addEventListener("backbutton", showConfirm, false);
	//db.transaction(populateDB, errorCB, successCB);
}



// Show a custom confirmation dialog
//
function showConfirm() {
	navigator.notification.confirm(
			'Apakah Anda ingin menutup aplikasi ini?',
			onConfirm,              // callback to invoke with index of button pressed
			'PRUforce',            // title
			'Ya,Tidak'          // buttonLabels
	)
}

function onConfirm(buttonIndex) {
    if(buttonIndex == 1){
    navigator.app.exitApp();
   // device.exitApp(); 
    }
}