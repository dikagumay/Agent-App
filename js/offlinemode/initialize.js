//--------------------Initialize---------------------------//
	
function Init(user, pwd){
		
	var options = persistence.getOptions(user, pwd);

		var collections = {};

		collections[PEOPLE_COLLECTION_NAME] = {

			searchFields : {AgentCode: 'string', userlogin: 'string', 
							pwd: 'string', recruiteragentcode: 'string', npaNumber: 'string',  candidateName: 'string'},
		};
		
		collections[AGENT_COLLECTION_NAME] = {

			searchFields : {agentName: 'string', recruiteragentcode:'string', userlogin: 'string', 
							pwd: 'string' },
		};		
		
		WL.JSONStore.init(collections, options)

		.then(function () {
			AppsLog.log("success init ...");
			
		/*	InitRecExam(uname,pswd);
			InitMasterData(uname,pswd);
			InitFastStart(uname,pswd);
			InitDataBank(uname,pswd);
			InitDataOffice(uname,pswd);
			InitDataProvince(uname,pswd);
			InitAgentJourneys(uname,pswd);
		  	InitInboxMessage(uname,pswd);
//		  	removeCollections(COLLECTION_LISTCOMISSIONESTIMATION);
		  	InitDataComissionEstimate(uname, pswd);*/
		  	console.log("init json store")
		  	InitJsonStore(uname, pswd);
		})

		.fail(function (errorObject) {
			AppsLog.log("not success init ...");
		});
		
}

//------------------------------------------------------------------------//

function addCollection (collection, data)
{	
	datafs={};
	datafs.city = data;
	try {
		WL.JSONStore.get(collection).add(datafs)	
		.then(function () {
			AppsLog.log('success add data ... ');
		})
		.fail(function (errorObject) {
			AppsLog.log('failed add data ... ');
		});
	} catch (e) {
		AppsLog.log('exception add data ... ' + e);
	}			
}


//------------------------------------------------------------------------//
function closeConnection(){


	var g_agentdetail = {}, g_leaderdetail = {}, g_candidate = {}, g_candidatedetail = {}, g_candidatedata = {}, g_recexam = {}, aml_score = {}, npa_verify = {}, npa_verify_fp = {}, agentcode_verify = {}, agentcode_verify_fp = {}, pruforceid_temp = {}, pruforceid_fp = '', g_faststartschedule = {}, g_faststartscheduledetail = {}, g_faststartschedule_city = {}, SQ = {}, SQFP = {}, g_amltrainingmaterial = [], status_amltraining = 'N', g_npa = '', g_agent = '', listBank = [], T3583 = {}, T3582 = {}, T3692 = {}, T5696 = {}, TT518 = {}, TI028 = {}, T3571 = {}, TI183 = {}, TI181 = {}, MSTBABRPF = {}, NPWPSTATUS = {}, T3583_ = [], T3582_ = [], T3692_ = [], T5696_ = [], TT518_ = [], TI028_A = {}, TI028_B = [], T3571_ = [], TI183_ = [], TI181_ = [], MSTBABRPF_ = [], NPWPSTATUS_ = [], candidateid, candidatename = '', type = '', status = '', candidateidexipredstatus = '', aajischeduleid = '', aajidate = '', aajiagentcode = null, aajistatusagent = '', fstscheduleid = '', fstagentcode = '', fstcouseCode = '', faststarttype = '', faststartdate = '', fstdescription = ''; city = '', sum = '', g_agentjourney = {}, ListBank = [], g_masterdata = {}, ListOffice = [], statusDocument = '', ListProvince = [], g_status_signature = '', g_agentcode = '', g_statusagentcode = '', g_spouseagentcode = '', g_statusspouseagentcode = '', g_leaderspouseagentcode = '', g_leaderagentcode = '', agen_value = "Agen Diaktifkan Kembali", g_imageDataRek = '', g_imageDataPasFoto = '', g_imageDataNPWP = '', g_imageDataKTP = '', counter_setuju=0, licenseType = '', DTETRM = '', fasttype = '';aajilocation = '', name = '', txtCandidateDOB = '', txtCandidateIDCardNo = '', txtCandidateEmail = '', txtCandidatePhoneNo = '', npanumber = '', flagA = 'N', flagB = 'N', flagC = 'N', flagD = 'N', flagE = 'N', flagF = 'N', candidatetitle = '', _id = '', g_listcandidate = {}, g_candidateprovince = '', g_npwpprovince = '', g_candidateofficecode = '', g_bankname = '', g_signature_candidate = '', g_signature_recruiter = '', signature_candidate = '', signature_recruiter = '', g_candidateidexpired = '', utype = '', fPribadi = '',fRekening ='',fPajak='',fKeluarga='',fAgen='',fFStart='', IsExist = false;
	
	try {

		WL.JSONStore.closeAll()

		.then(function () {
			AppsLog.log('Success close Connection ...');
		})

		.fail(function (errorObject) {
			AppsLog.log("failed close Connection ..." + errorObject);
		});

	} catch (e) {
		AppsLog.log("failed ..." + e);
	}
}


//------------------------------------------------------------------------//
function clearCollection(collection){
	try {
		WL.JSONStore.get(collection).clear()
		.then(function () {
			AppsLog.log('success removeCollection data ... ' + collection);
		})
		.fail(function (errorObject) {
			AppsLog.log('failed removeCollection data ... ');
		});
	} catch (e) {
		AppsLog.log('exception add data ... ' + e);
	}	
}

function removeCollections(collection){
	WL.JSONStore.get(collection)
	.removeCollection()

	.then(function () {
	    //handle success
	})

	.fail(function (errorObject) {
	    //handle failure
	}); 
}





