
var msg = {
	Header: 'PRUforce',
	mandatoryField: "Mohon diisi",
	mandatoryFields: 'Mohon mengisi semua kolom isian',
	mandatoryFieldLogin: 'Silakan masukkan PRUforce ID dan Password',
	usiaMin: "Usia minimum agen adalah 17 tahun",
	pilihSatu: "Mohon pilih salah satu",
	emailExist: "Proses tidak dapat dilanjutkan karena email / nomor telepon seluler sudah terdaftar di sistem PRUForce",
	PhoneNoExist: "Proses tidak dapat dilanjutkan karena email / nomor telepon seluler sudah terdaftar di sistem PRUForce",
	EmailNotFound: 'Email tidak ditemukan',
	bankAccNameNotMatch: "Nama yang tercantum di rekening berbeda dengan nama lengkap Anda",
	dobNotToday: "Tanggal lahir tidak boleh sama dengan tanggal hari ini",
	formatInvalid: "Format email Anda salah",
	confirSpouseIsAgent: "Pastikan Anda dan pasangan berada dalam manajer keagenan yang sama",
	DocMandatory: 'Mohon mengupload gambar',
	DocBBMandatory: 'Anda harus mengunggah bukti bayar',
	MaxlengthNpwpNo: 'No NPWP Anda kurang dari 15 angka',
	incorrectlogin: 'PRUforce ID atau Password salah',
	incorrectSFA: 'SFA ID atau Password salah',
	PRUforceId_ag_exist: 'Kode Agen Anda sudah terdaftar di PRUforce ID',
	PRUforceId_ca_exist: 'NPA Anda sudah terdaftar di PRUforce ID',
	session_timeout: 'Sesi Anda telah habis waktunya, silakan login kembali',
	DataNotFound: 'Data tidak ditemukan, silakan mencoba kembali',
	DataNotFound1: 'Data tidak ditemukan',
	DataNotFoundRecruiter: 'Data yang Anda masukkan tidak sesuai dengan database kami. Silakan hubungi perekrut Anda.',
	DataNotFoundAgency: 'Data yang Anda masukkan tidak sesuai dengan database kami. Silakan hubungi Agency Administration Support.',
	FailedConnection: 'Permintaan tidak berhasil diproses, silakan periksa koneksi Anda',
	NPAInactive: 'NPA Anda tidak aktif',
	NPAInactiveAgent: 'NPA ini tidak aktif',
	NPARejected: 'Pengajuan aplikasi Anda tidak berhasil dilakukan. Anda dapat melakukan pengajuan kembali dalam waktu tujuh hari ke depan. Silahkan menghubungi Agency Administration Support (AgencyAdmin.Helpdesk@prudential.co.id) untuk pertanyaan lebih lanjut',
	NPARejectedTerminate: 'Pengajuan Aplikasi Anda tidak berhasil dilakukan, karena status Perekrut dan Manajer Keagenan Anda. Anda dapat melakukan pengajuan kembali dalam waktu tujuh hari ke depan. Silahkan menghubungi Agency Administration Support (AgencyAdmin.Helpdesk@prudential.co.id) untuk pertanyaan lebih lanjut',
	AgentCodeInactive: 'Kode Agen Anda tidak aktif',
	DataLeaderNotFound: 'Data Leader tidak ditemukan, silakan mencoba kembali',
	SuccessRegPRUforceID: 'PRUforce ID berhasil terdaftar',
	FailedSaveSQ: 'Pertanyaan Rahasia tidak berhasil disimpan',
	IncorrectSQ: 'Jawaban pertanyaan rahasia Anda tidak sesuai',
	PasswordNotMatch: 'Konfirmasi password tidak sama',
	NewPasswordNotMatch: 'Konfirmasi password baru tidak sama',
	SuccessChangePassword: 'Password Anda berhasil diubah',
	EmailNotFound: 'Email Anda tidak terdaftar di database kami. Silakan hubungi Agency Administration Support.',
	IncorrectSMS: 'Kode Verifikasi SMS yang Anda masukkan salah',
	PRUforceIDSent: 'PRUforce ID Anda telah dikirimkan ke email',
	SuccessSubmit: 'Aplikasi berhasil diajukan',
	submitdone: 'Aplikasi Anda telah diajukan', // ini buat lock apppack
	failedsubmit: 'Proses pengiriman data tidak berhasil dilakukan, mohon dicoba kembali',
	faileduploadfromfuse: 'Upload KTP tidak berhasil dilakukan, mohon dicoba kembali',
	failedupload: 'KTP belum diupload, mohon dicoba kembali',
	faileduploadphoto: 'Photo belum diupload, mohon dicoba kembali',
	faileduploadbukrek: 'Buku Rekening belum diupload, mohon dicoba kembali',
	pendingdoc: 'Terdapat data yang harus diubah atau tidak lengkap: ',
	validateDataCandidate: 'Terdapat data yang tidak lengkap: ',
	signagent: 'Aplikasi Anda sudah tersimpan, menunggu tanda tangan perekrut',
	signCandidate: 'Tanda Tangan Anda diperlukan untuk melengkapi proses pengajuan aplikasi calon Agen ',
	KodeEtikAnswer: 'Anda belum memilih jawaban',
	ConfirmAAJI1: 'Aplikasi diajukan di atas jam 11:00. Jadwal Ujian AAJI yang Anda pilih tidak dapat diproses. Silakan pilih jadwal 6-13 hari dari tanggal pengajuan',
	ConfirmAAJI2: 'Aplikasi diajukan di bawah jam 11:00. Jadwal Ujian AAJI yang Anda pilih tidak dapat diproses. Silakan pilih jadwal 5-13 hari dari tanggal pengajuan',
	SuccessSubmitAAJI: 'Jadwal Ujian AAJI berhasil disimpan. Silakan menunggu konfirmasi pendaftaran selanjutnya.',
	ConfirmLicenseAAJI: 'Anda belum memiliki license AAJI atau license AAJI Anda sudah kadaluarsa. Silakan mengikuti ujian AAJI kembali.',
	AAJIValidation_submission: 'Mohon memilih tanggal dengan jarak 5-12 hari kerja dari tanggal pengajuan',
	AAJIValidation_quota: 'Kuota yang Anda pilih sudah penuh, silakan memilih jadwal dengan jarak 5-12 hari dari tanggal pengajuan.',
	AAJIValidation_submission_success: 'Jadwal ujian AAJI telah tersimpan',
	AAJIValidation_expired: 'Jadwal Pendaftaran terakhir telah lewat, silakan pilih jadwal AAJI yang lain.',
	AAJISendPushNotif: 'Jadwal AAJI yang Anda pilih tidak dapat diproses. Silakan memilih jadwal ujian AAJI yang baru',
	FastStart_SuccessSubmit: 'Jadwal FastStart telah tersimpan',
	FastStart_valSubmit: 'Mohon memilih salah satu jadwal FastStart',
	FastStart_valTrain: 'Mohon pilih salah satu jenis Training FastStart',
	MandatoryTrain: 'Anda belum memilih jadwal. Silakan pilih salah satu',
	regist_title: 'Formulir Registrasi',
	regist_text: 'Pastikan semua data yang Anda masukkan sudah benar',
	AMLE_title: 'Ujian Peraturan dan Kode Etik Perusahaan',
	AMLE_validation: 'Anda harus menyelesaikan Pelatihan Peraturan dan Kode Etik Perusahaan terlebih dahulu',
	AMLE_done: 'Anda sudah lulus Ujian Pelatihan Peraturan dan Kode Etik Perusahaan',
	AML_check: 'Aplikasi keagenan hanya bisa diproses jika kandidat mengikuti pelatihan dan lulus ujian Peraturan dan Kode Etik Perusahaan',
	AMLT_title: 'Pelatihan Peraturan dan Kode Etik Perusahaan',
	AMLT_done: 'Anda dapat mengikuti Ujian Peraturan dan Kode Etik Perusahaan',
	TOC_submission: 'Anda belum menyetujui ketiga halaman Lembar Persetujuan',
	TOC_question: 'Mohon pilih salah satu pernyataan',
	TOC_namedepartement: 'Mohon isi nama dan departemen',
	logout: 'Apakah Anda ingin keluar dari aplikasi ini?',
	failedSendSMS: 'Gagal Kirim Ulang SMS',



};