angular.module('PruForce.routes', [])

pruforce.config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider

		// Main
		.state('index', {
			url: '/index',
			templateUrl: 'components/main/index.html'
		})
		.state('c-dashboard-done', {
			url: '/c-dashboard-done',
			templateUrl: 'components/main/c-dashboard-done.html'
		})
		.state('a-notification', {
			url: '/a-notification',
			templateUrl: 'components/main/a-notification.html'
		})
		.state('homepage', {
			url: '/homepage',
			controller: 'HomeCandidateCtrl',
			templateUrl: 'components/home/candidate_home.html'
		})

		// Authenticate
		.state('login', {
			url: '/login',
			controller: 'LoginCtrl',
			templateUrl: 'components/login/login.html'
		})
		.state('welcome-agent', {
			url: '/welcome-agent',
			templateUrl: 'components/main/welcome-agent.html'
		})
		.state('sfa-login', {
			url: '/sfa-login',
			templateUrl: 'components/authenticate/sfa-login.html'
		})
		.state('verifikasi-sms', {
			url: '/verifikasi-sms/:smsType/:userType',
			controller: 'SMSVerificationCtrl',
			templateUrl: 'components/sms_verification/verifikasi-sms.html'
		})
		.state('verifikasi-sms-loading-page', {
			url: '/verifikasi-sms-loading-page',
			templateUrl: 'components/sms_verification/verifikasi-sms-loading-page.html'
		})
		.state('create-pruforce-id', {
			url: '/create-pruforce-id/:type',
			controller: 'CreatePRUForceIDCtrl',
			templateUrl: 'components/daftar_pruforce/create-pruforce-id.html'
		})
		.state('lupa-pertanyaan-rahasia-agen', {
			url: '/lupa-pertanyaan-rahasia-agen',
			templateUrl: 'components/lupa_pertanyaan_rahasia/lupa-pertanyaan-rahasia-agen.html'
		})
		.state('lupa-pertanyaan-rahasia-calon-agen', {
			url: '/lupa-pertanyaan-rahasia-calon-agen',
			templateUrl: 'components/lupa_pertanyaan_rahasia/lupa-pertanyaan-rahasia-calon-agen.html'
		})
		.state('recover-pruforce-id-pertanyaan-rahasia', {
			url: '/recover-pruforce-id-pertanyaan-rahasia',
			templateUrl: 'components/authenticate/recover-pruforce-id-pertanyaan-rahasia.html'
		})
		.state('recover-pruforce-id-show-id-and-pass', {
			url: '/recover-pruforce-id-show-id-and-pass',
			templateUrl: 'components/authenticate/recover-pruforce-id-show-id-and-pass.html'
		})
		// Authenticate not in invisionapp
		.state('c-login-verify', {
			url: '/c-login-verify',
			templateUrl: 'components/authenticate/c-login-verify.html'
		})
		.state('c-repass', {
			url: '/c-repass',
			templateUrl: 'components/authenticate/c-repass.html'
		})
		.state('a-enter-pass', {
			url: '/a-enter-pass',
			templateUrl: 'components/authenticate/a-enter-pass.html'
		})
		.state('new-pass', {
		  url: '/new-pass',
		  controller: 'NewPasswordCtrl',
		  templateUrl: 'components/new_password/new-pass.html'
		})
		.state('lupa-pass', {
			url: '/lupa-pass',
			controller: 'LupaPasswordCtrl',
			templateUrl: 'components/lupa_password/lupa-pass.html',
			resolve: {
				QuestionFP: function (SecurityQuestionService) {
					return SecurityQuestionService.invoke().then(function (res) {
						return res;
					});
				}
			}
		})
		.state('ganti-password', {
			url: '/ganti-password',
			controller: 'ChangePasswordCtrl',
			templateUrl: 'components/ganti_password/ganti-password.html'
		})
		.state('ganti-password-buat-password-tidak-berhasil', {
			url: '/ganti-password-buat-password-tidak-berhasil',
			templateUrl: 'components/authenticate/ganti-password-buat-password-tidak-berhasil.html'
		})
		.state('ganti-password-masih-password-lama', {
			url: '/ganti-password-masih-password-lama',
			templateUrl: 'components/authenticate/ganti-password-masih-password-lama.html'
		})
		.state('ganti-password-password-konfirmasi-tidak-sama', {
			url: '/ganti-password-password-konfirmasi-tidak-sama',
			templateUrl: 'components/authenticate/ganti-password-password-konfirmasi-tidak-sama.html'
		})
		.state('ganti-password-password-berhasil-dibuat', {
			url: '/ganti-password-password-berhasil-dibuat',
			templateUrl: 'components/authenticate/ganti-password-password-berhasil-dibuat.html'
		})
		.state('npa', {
			url: '/npa',
			templateUrl: 'components/authenticate/npa.html'
		})
		.state('security-info', {
			url: '/security-info',
			templateUrl: 'components/authenticate/security-info.html'
		})
		.state('security-question', {
			url: '/security-question',
			controller: 'SecurityQuestionCtrl',
			templateUrl: 'components/security_question/security-question.html',
			resolve: {
				SecurityQuestion: function (SecurityQuestionService) {
					return SecurityQuestionService.invoke().then(function (res) {
						return res;
					});
				}
			}
		})
		// Rekrutmen
		.state('daftar-rekrutment', {
			url: '/daftar-rekrutment',
			controller: 'DaftarRekrutmentCtrl',
			templateUrl: 'components/recruitment/daftar-rekrutment.html'
		})
		// .state('daftar-rekrutment-load-to-refresh-list', {
		//   url: '/daftar-rekrutment-load-to-refresh-list',
		//   templateUrl: 'components/recruitment/daftar-rekrutment-load-to-refresh-list.html'
		// })
		.state('formulir-registrasi', {
			url: '/formulir-registrasi',
			controller: 'FormulirRegistrasiCtrl',
			templateUrl: 'components/recruitment/formulir-registrasi.html'
		})
		.state('formulir-perekrutan', {
			// url: '/formulir-perekrutan',
			url: '/formulir-perekrutan/:npa/:candidateName/:candidateIdCardNo/:candidateCellularNo1/:candidateEmail',
			controller: 'FormulirPerekrutanCtrl',
			templateUrl: 'components/recruitment/formulir-perekrutan.html',
			resolve: {
				GetRecExam: function (FormulirPerekrutanService) {
					return FormulirPerekrutanService.invoke().then(function (res) {
						return res;
					})
				}
			}
		})
		.state('formulir-perekrutan-filled', {
			url: '/formulir-perekrutan-filled',
			controller: 'dataCandidateCtrl',
			templateUrl: 'components/recruitment/formulir-perekrutan-filled.html',
			resolve: {
				QuestionList: function (CandidateFilledService) {
					return CandidateFilledService.invoke().then(function (res) {
						return res;
					});
				}
			}
		})
		.state('nilai-kelayakan-calon-agen', {
			url: '/nilai-kelayakan-calon-agen/:scoreUjian',
			controller: 'ScoreUjianCtrl',
			templateUrl: 'components/recruitment/nilai-kelayakan-calon-agen.html'
		})
		.state('npa-received', {
			url: '/npa-received/:npa/:candidateName/:candidateIdCardNo/:candidateCellularNo1/:candidateEmail',
			controller: 'NPAReceivedCtrl',
			templateUrl: 'components/recruitment/npa-received.html'
		})
		.state('detail-notification-sign', {
			url: '/detail-notification-sign/:npa',
			controller: 'DetailNotifSignCtrl',
			templateUrl: 'components/inbox/detail-notification-sign.html',
			resolve: {
				getCreateDate: function (GetCreateDateAgentJourneyService, $stateParams) {
					return GetCreateDateAgentJourneyService.invoke($stateParams.npa).then(function (res) {
						return res;
					});
				}
			}
		})
		.state('status-perekrutan', {
			url: '/status-perekrutan',
			templateUrl: 'components/recruitment/status-perekrutan.html'
		})

		// Application Pack
		// data kandidat pribadi, calendar pop, data kandidat rekening, data kandidat pajak, data kandidat keluarga, data kandidat keagenan, data kandidat jejaring sosial, data kandidat dokumen, data kandidat dokumen lanjut rekening tabungan, data kandidat dokumen lanjut syarat dan ketentuan keagenan, data kandidat dokumen lanjut surat pernyataan calon agen, aplikasi berhasil dikirim, data kandidat faststart, data kandidat faststart lanjut, data kandidat ujian aaji, data kandidat ujian aaji lanjut, data kandidat ujian aaji lanjut_batal pilih note, data kandidat ujian aaji lanjut_pilih lagi
		.state('data-kandidat-pack', {
			url: '/data-kandidat-pack',
			templateUrl: 'components/application_pack/data-kandidat-pack.html'
		})
		.state('aplikasi-berhasil-dikirim', {
			url: '/aplikasi-berhasil-dikirim',
			templateUrl: 'components/application-pack/aplikasi-berhasil-dikirim.html'
		})

		// Main Agreement
		// For syarat-dan-ketentuan-keagenan-empty, syarat-dan-ketentuan-keagenan-with-notification, syarat-dan-ketentuan-keagenan-checked. 
		.state('syarat-dan-ketentuan-keagenan-empty', {
			url: '/syarat-dan-ketentuan-keagenan-empty',
			templateUrl: 'components/main_agreement/syarat-dan-ketentuan-keagenan-empty.html'
		})

		.state('syarat-dan-ketentuan-keagenan-with-notification', {
			url: '/syarat-dan-ketentuan-keagenan-with-notification',
			templateUrl: 'components/main_agreement/syarat-dan-ketentuan-keagenan-with-notification.html'
		})
		.state('syarat-dan-ketentuan-keagenan-checked', {
			url: '/syarat-dan-ketentuan-keagenan-checked',
			templateUrl: 'components/main_agreement/syarat-dan-ketentuan-keagenan-checked.html'
		})
		.state('pernyataan-keagenan', {
			url: '/pernyataan-keagenan',
			templateUrl: 'components/main_agreement/pernyataan-keagenan.html'
		})
		.state('lembar-persetujuan-tanda-tangan', {
			url: '/lembar-persetujuan-tanda-tangan',
			templateUrl: 'components/main_agreement/lembar-persetujuan-tanda-tangan.html'
		})
		.state('tanda-tangan', {
			url: '/tanda-tangan',
			templateUrl: 'components/main_agreement/tanda-tangan.html'
		})
		.state('perjanjian-keagenan', {
			url: '/perjanjian-keagenan',
			templateUrl: 'components/main_agreement/perjanjian-keagenan.html'
		})
		.state('syarat-dan-ketentuan-tambahan-empty', {
			url: '/syarat-dan-ketentuan-tambahan-empty',
			templateUrl: 'components/main_agreement/syarat-dan-ketentuan-tambahan-empty.html'
		})
		.state('syarat-dan-ketentuan-tambahan', {
			url: '/syarat-dan-ketentuan-tambahan',
			templateUrl: 'components/main_agreement/syarat-dan-ketentuan-tambahan.html'
		})

		// Calon Agen Login
		// .state('verifikasi-data-calon-agen', {
		// 	url: '/verifikasi-data-calon-agen',
		// 	templateUrl: 'components/login/login_no_pruforceId/calon_agen_no_pruforceId/verifikasi-data-calon-agen.html'
		// })
		// .state('sidebar-menu-calon-agen-1-line-nama', {
		//   url: '/sidebar-menu-calon-agen-1-line-nama',
		//   templateUrl: 'components/calon_agen-login/sidebar-menu-calon-agen-1-line-nama.html'
		// })
		// .state('sidebar-menu-calon-agen-2-line-nama', {
		//   url: '/sidebar-menu-calon-agen-2-line-nama',
		//   templateUrl: 'components/calon_agen-login/sidebar-menu-calon-agen-2-line-nama.html'
		// })
		// .state('sidebar-menu-calon-agen-3-line-nama', {
		//   url: '/sidebar-menu-calon-agen-3-line-nama',
		//   templateUrl: 'components/calon_agen-login/sidebar-menu-calon-agen-3-line-nama.html'
		// })
		// .state('homepage-calon-agen', {
		//   url: '/homepage-calon-agen',
		//   templateUrl: 'components/calon_agen-login/homepage-calon-agen.html'
		// })

		.state('nomor-agen', {
			url: '/nomor-agen',
			templateUrl: 'components/calon_agen/nomor-agen.html'
		})
		.state('notifikasi-user', {
			url: '/notifikasi-user/:userId',
			controller: 'InboxCtrl',
			cache: true,
			templateUrl: 'components/inbox/notifikasi-user.html',
			resolve: {
				GetListInbox: function (InboxService, $stateParams) {
					return InboxService.invoke($stateParams.userId).then(function (res) {
						return res;
					});
				}
			}
		})
		.state('pelatihan-peraturan-dan-kode-etik', {
			url: '/pelatihan-peraturan-dan-kode-etik',
			templateUrl: 'components/calon_agen/pelatihan-peraturan-dan-kode-etik.html'
		})
		.state('pelatihan-peraturan-dan-kode-etik-selesai', {
			url: '/pelatihan-peraturan-dan-kode-etik-selesai',
			templateUrl: 'components/calon_agen/pelatihan-peraturan-dan-kode-etik-selesai.html'
		})
		.state('ujian-peraturan-dan-kode-etik', {
			url: '/ujian-peraturan-dan-kode-etik',
			templateUrl: 'components/ujian_kode_etik/ujian-peraturan-dan-kode-etik.html'
		})
		.state('ujian-kode-etik-perusahaan', {
			url: '/ujian-kode-etik-perusahaan',
			controller: 'UjianKodeEtikCtrl',
			templateUrl: 'components/ujian_kode_etik/ujian-kode-etik-perusahaan.html',
			resolve: {
				GetAMLQuestionList: function (UjianKodeEtikService) {
					return UjianKodeEtikService.invoke().then(function (res) {
						return res;
					});
				}
			}
		})
		.state('aml-training', {
			url: '/aml-training/:curdate',
			controller: 'AMLTrainingCtrl',
			templateUrl: 'components/aml_training/training-material.html',
			resolve: {
				GetAMLTrainingSlide: function (AMLTrainingService, $stateParams) {
					console.log("testsss" + $stateParams);
					return AMLTrainingService.invoke($stateParams.curdate).then(function (res) {
						return res;
					});
				}
			}
		})
		.state('ujian-kode-etik-perusahaan-lulus', {
			url: '/ujian-kode-etik-perusahaan-lulus',
			templateUrl: 'components/calon_agen/ujian-kode-etik-perusahaan-lulus.html'
		})
		// .state('homepage-slider-2-line', {
		//   url: '/homepage-slider-2-line',
		//   templateUrl: 'components/calon_agen-login/homepage-slider-2-line.html'
		// })
		// .state('homepage-slider-3-line', {
		//   url: '/homepage-slider-3-line',
		//   templateUrl: 'components/calon_agen-login/homepage-slider-3-line.html'
		// })

		// Candidate
		.state('a-polis', {
			url: '/a-polis',
			templateUrl: 'components/a-polis.html'
		})
		.state('r-candidate', {
			url: '/r-candidate',
			templateUrl: 'components/candidate/r-candidate.html'
		})
		.state('r-candidate-done', {
			url: '/r-candidate-done',
			templateUrl: 'components/candidate/r-candidate-done.html'
		})

		//Lampiran Perjanjian
		.state('perjanjian-keagenan-lampiran-1', {
			url: '/perjanjian-keagenan-lampiran-1',
			templateUrl: 'components/lampiran_perjanjian/perjanjian-keagenan-lampiran-1.html'
		})
		.state('perjanjian-keagenan-lampiran-2', {
			url: '/perjanjian-keagenan-lampiran-2',
			templateUrl: 'components/lampiran_perjanjian/perjanjian-keagenan-lampiran-2.html'
		})
		.state('perjanjian-keagenan-lampiran-3', {
			url: '/perjanjian-keagenan-lampiran-3',
			templateUrl: 'components/lampiran_perjanjian/perjanjian-keagenan-lampiran-3.html'
		})
		.state('setting', {
			url: '/setting',
			controller: 'SettingCtrl',
			templateUrl: 'components/setting/setting.html'
		})
		.state('prufaststart-agent', {
			url: '/prufaststart-agent',
			controller: 'PruFastCtrl',
			templateUrl: 'components/prufaststart_agent/prufaststart_agent.html'
		})
		.state('daftar-pruforceId-with-sfa', {
			url: '/daftar-pruforceId-with-sfa',
			controller: 'DaftarPRUForceIDWithSFACtrl',
			templateUrl: 'components/daftar_pruforce/daftar-pruforceId-with-sfa.html'
		})
		.state('daftar-pruforceId-calon-agen', {
			url: '/daftar-pruforceId-calon-agen',
			controller: 'CandidateDaftarPRUForceIDCtrl',
			templateUrl: 'components/daftar_pruforce/daftar-pruforceId-calon-agen.html'
		})
		.state('daftar-pruforceId-no-sfa', {
			url: '/daftar-pruforceId-no-sfa',
			controller: 'DaftarPRUForceIDNoSFACtrl',
			templateUrl: 'components/daftar_pruforce/daftar-pruforce-no-sfa.html'
		})
		.state('lupa-pruforceId-agen', {
			url: '/lupa-pruforceId-agen',
			controller: 'AgentForgetPRUForceIDCtrl',
			templateUrl: 'components/lupa_pruforceId/lupa-pruforceId-agen.html'
		})
		.state('lupa-pruforceId-calon-agen', {
			url: '/lupa-pruforceId-calon-agen',
			controller: 'CandidateForgetPRUForceIDCtrl',
			templateUrl: 'components/lupa_pruforceId/lupa-pruforceId-calon-agen.html'
		})
		.state('access_option', {
			url: '/access_option/:access_type',
			controller: 'AccessCtrl',
			templateUrl: 'components/access_option/access_option.html'
		})

		.state('daftar-newsqs', {
			url: '/daftar-newsqs',
			controller: 'SqsCtrl',
			templateUrl: 'components/newSqs/homepage/index.html'
		})

		.state('pemegangpolis', {
			url: '/pemegangpolis',
			controller: 'profilePemegangPolisCtrl',
    		templateUrl: 'components/newSqs/profil_pemegang_polis/index.html'
		})

		.state('search-ilustrasi', {
			url: '/search-ilustrasi',
			controller: 'searchSqsCtrl',
			templateUrl: 'components/newSqs/search/search-ilustrasi.html'
		})

		.state('daftar-ilustrasi', {
			url: '/daftar-ilustrasi',
			controller: 'ilustrasiCtrl',
			templateUrl: 'components/newSqs/ilustrasi/daftar-ilustrasi.html'
		})

		.state('daftar-ilustrasi-tertunda', {
			url: '/daftar-ilustrasi-tertunda',
			controller: 'ilustrasiCtrl',
			templateUrl: 'components/newSqs/ilustrasi/daftar-ilustrasi-tertunda.html'
		})

		.state('produk-manfaat', {
			url: '/produk-manfaat',
			controller: 'productCtrl',
			templateUrl: 'components/newSqs/products/index.html'
		})

		.state('buat-template', {
			url: '/buat-template',
			controller: 'templatesCtrl',
			templateUrl: 'components/newSqs/templates/buat-pilih-produk.html'
		})

		.state('daftar-templates',{
			url: '/daftar-templates',
			controller: 'templatesCtrl',
			templateUrl: 'components/newSqs/templates/daftar-templates.html',
		})

		.state('salin-ilustrasi',{
			url: '/salin-ilustrasi',
			controller: 'ilustrasiCtrl',
			templateUrl: 'components/newSqs/ilustrasi/salin-ilustrasi.html',
		})

		.state('status-ilustrasi',{
			url: '/status-ilustrasi',
			controller: 'ilustrasiCtrl',
			templateUrl: 'components/newSqs/ilustrasi/status-ilustrasi.html',
		})

		// sqs-send-email
		.state('send-email-ilustrasi', {
			url: '/send-email-ilustrasi',
			templateUrl: 'components/newSqs/send_email/send-email-ilustrasi.html'
		})

		.state('send-email-template', {
			url: '/send-email-template',
			templateUrl: 'components/newSqs/send_email/send-email-template.html'
		})

		// output
	    .state('viewPdf', {
	        url: '/output',
	        templateUrl: 'components/newSqs/output/viewer.html',
	    })

	    .state('output.list', {
	        url: '/list',
	        templateUrl: 'components/newSqs/output/pruden-hal1.html',
	    })
	    
	    .state('output.list2', {
	        url: '/list2',
	        templateUrl: 'components/newSqs/output/pruden-hal2.html',
	    })

		/*.state('output-hal1',{
			url: '/hal1',
			templateUrl: 'components/newSqs/output/pruden-hal1.html',
		})

		.state('output-hal2',{
			url: '/hal2',
			templateUrl: 'components/newSqs/output/pruden-hal2.html',
		})*/

	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/login');
});