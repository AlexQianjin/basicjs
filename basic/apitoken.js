var superagent = require('superagent');
// var fs = require('fs');
var rootCas = require('ssl-root-cas/latest').create();

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// const options = {
// 	pfx: fs.readFileSync('certificates/wildcard.cloudapp.net.pfx'),
// 	passphrase: 'W0nderware'
// };
// var pfx = fs.readFileSync('certificates/wildcard.cloudapp.net.pfx');

// var url = 'https://localhost:44377/api/token';
// var cookie =
// 	'_ga=GA1.1.1573225771.1511508465; _gid=GA1.1.303946317.1515044279; .AspNet.ApplicationCookie=xz4YPI6eRNoD0NAC7ZnVOSCntyoGzYD4PU5QBbp55xgqT_0YekyjkIpxQuHEV9GJJ3_BC5LhX0G4dGAaTrfRI288qD-mNKU3Z3X_hTtI1-pwth5R8RhIlPyw-DAGpCDnWK8mtS-OYKuVF381xM_W3aZbfxH_9StVkd1UtszLqAB0hx9twvjHP2Rkvz9oRbGthrl2eFJcbwJgc5AfoZSQiMSFS3f2nDM68QMerX4BVez_sAWhY1xKqcBXeRxVYu9nCOKzevKIMqqhl7KAwhxL5YLUDYpBe_OYuZNkw-bU-VGvULA56ZstH81QVXunrfPGKEvaiClDU5TS7mLvYKKxibBFr7qrevPlbDLnkmU8xJRmJ3z8LanP2qL_bwy8t7dVjukTE9cujYbeM2YIKBXzsF4KlSyK45lEG5YoDgwcWYLVPXM2_empuenHgMFOLfM4YCHHxUmttaaIe7DIzLjQs0MInd7FV0tPCoMABSS_EI5nWg4mRvo40Qc65Pq98RfMA4mWIVKgotjRnDjbG8dSdr9yggqAqmVVVUQxa6OutbxFlKUTV5yuIzTFx76G6hQIj31dHn0sLTHvBTvrL1SuBmsEemY7tcJ3blbqxtVTBxNPXNr5QunBeRiSVfk-oK-A89DVYmFEN34Ou-Nr8zHl9Cn3Nas3hyu6smcRUUKutgH5v8muhLH63CAS084WAE624Y3rRn_mOJjV8PvQcruqo89bod0MHKCPpfftY8BtnzUPbSdSjQ6gHT3lfzjkTF3v8YVbQZjkBiCQgUwK4-GkgAQTz5cYiZ8qIgWznvSRiH8kliTUJf_6saU7Se3qVzHsHYzzOhB29xbRvLnCiO9EUHCUexEkD8TYClGRrQh0pueuochQNBgSK_j1ypJlozv-Bb7VLIWUKCx2kQgfqIebW_WSOTjY3R3X0r4rLp-x5c5cBYP_GPX7c4ZB-CFQQREDnDq2FJ4eLl14swx0tJl1sppbJd15nhb6r1DnCZuvx548kp6W-Nk9pxOvYf0vPEDJqezgE0xE669J-VSi5doLEoBvaHnMF9y_aQMmorQG9RY71OsTZ9G-wpkgIX-dd_8UW5carWRDO24-FObqPRyevnNKFWei9yHu5Vjkj-9NPKM2jq-xpGtEu3xqypN2emEikA5ayX9EfdALUgvBg5NDhw; site=instudio';

var urlDemo = 'https://int.devstudioonline.wonderware.com/api/token';
var cookieDemo =
	'ai_user=rfVKD|2017-12-13T07:35:17.646Z; _ga=GA1.2.233633178.1513150504; _gid=GA1.2.500442944.1516155419; .AspNet.ApplicationCookie=WyG103pII_noV16Mfc9LBwYsAX-EbySYRSwWN9mF5fA04fdfar53WP-LoaPwEvrBMV46p_1JC1XPbiTAbXrsJ6B6zkowidst7UCxjL6OmLTJ9_l4Wt87i95zvNvlO3BIjWi2lNaEUiESww_8p5fPWryH-_C0QB7f0qJ1Wl0Q1l-YQGs6IQNLiud2unS0ajChCUMqyE_MI7tYAogxCDU9H5ZMoi7gxLLtRgBlW_dewNIc9toHjjxMIBPQvdm2UIspeKsDIr1-lkJ4QglaHlZ1vfkEmntM0LulUISrbcpR4p28AML0FiUJfHZEeOMiUTqbo_hmMuriRGdzrZD-b_xWo8CIi3eaIn0Y2ecm2a_Fh25jwVmMPi8bB--kpenWu8o7mkZcuC_ev-vN5WPQAVXq1kTaLcpT3zItcjYt9VcSXOE1ZP5C70RDXNkalKM-WX55pEwR6FsIQI1VuT8yubmrOpaW1zWlDPaE7F2LJHGeIzWdllEOohixpHJ87-JRomydnD5-37NKGsC3zglIFZBjnmNNaZR5A_vJ3KxbPalmxWkqHx2DbUHV76oZZfKODFp2r_UZPKgDsEAGRfay9eVqOhUTsaPrnJ1xLQop85aoQSetjwW1qPw1eMi5LKMON37_a4N8eTGBKo-mbamhqgYQFwcolzANN_I9mTjOnItgWQ3LUXgq44ELLgJIWeZO5idAAmoA2Uft9uMC5WhKMNEM4CSi_UH-IFKlXSR7bxIUtAGOBEt5F4vVOB38phQAG5u2UFHK-pFoMA-IVp8kwCt0PTyTyDxHrO-fuByVx8LViLhRicyyKYYxewgf3nMw-SmUBMjv2wc55yhv2gUhjOLOIzg8dtXMwbck8N_Kk7asfPXBMcSl_UHRxvB-GlMeNAQj3XLkxQ0XXDWohcxvCzHiX98WnWv1HvJ4RWoudA2GVtMBqQkvUdVlJXQ-YpSxKaPagvRYxp4zbT3Bum13AY5wMlj71-t0XRQOxs4X1rmGuT4T3Y3Xv0Hg09sHB1JuaIi8xKAAQkLiMSBtzyE0_XxRAJNTodk-IB668gNjG4BuY-dR7KIwaijuF1A_dO4whrxVAI_yaVzLK0rs2emcSO5cooKxPXBhNqIGPyF6cUe8fO-x1lqa7nuorScLS55g2ZkH03vuXu0kBqBinFkd7biAfQ';

// var urlCEPQA = 'https://cep-qa.azurewebsites.net/api/token';
// var cookieCEPQA =
// 	'_ga=GA1.3.293746813.1512736126; _gid=GA1.3.353416666.1515141416; .AspNet.ApplicationCookie=WY0EfGYfLjuJEiSDwUB_6sH3t5FVJrejGry3Nqx7hGDi5_TUrFnQpW62eR1JEKYSdz8zAQcvcKpxAQK1tv5iwwFI8tihV9bqlcbL3W1XQOyU21JXj89Yam6AVEO5V1hcc5ob-CjMn1FV0s_p4T-eT3IUdyijLlmzJTavkTI0H0xKi97vVa00CbLnN8RNvsyxxv2PLRzg4nhEiDbFS6-QEMdK5weC4vn6j90ZNbuoxBoA_0U5UvlOd99jO4UOaYoTVO3YmVJ9jOQZ_dAMFKfaDeL2qAWAD_EMYvrW98aKThK3JTCa_0Qx3NNtpQcoLO1b6MB0zlDJZjVU1oDLbc_LqDvHKOl18bT1QSpfIcXa_WpAzMIGnaYHOQhIR2jYnDg31Mth2rnF0FIAUghsC8LaOhWnLmkVBF7LBqc5IA0Mg1wcSfJ3BYvR4qTjY0yZZN6JfYuQpMnMv4UefFWg2vEVyLLOtf367Ol2oXiTSmE5MdzcOI-Ol1cNh8A6YtQkkR8kAGGNzVRouzW4zeVk5uuoH_1KKJpNo41u_3RObXj5J2UAwjSQ56iilvJAULa92y9mIKy3FJ7CwDzi2ixdZjbjgMovgZa-OrEQvtJPK6_ucaSex7nqBp00OcgQ91Rc3pMWjeIrgDWAqtuYvkT9uPlNzTQW88DZxRrYOkDITD0Lb9EsnAEie9fkNJTDXI6wbNDPmJ2f6gw0uJNKUF0v2bQTRUgEP5YRB_vZazMFZmVBBtoHLA9rjNu_a1L11HCnze6HKH8sn-7X02EB1ZjHvW94oyq0MLGn-Xy2wno1q9ibkJtD2GvY2L2WmDf_fPkjnXHMINtqkHDUhfkR2NQPS3fe0z_TxP_hr7rBvGaV6b2cTBXIL23AoOFtOee25iwXwr2OIYD-rLEX9bozIoxWTLgoxPkaVlBiJpiUwm54RvphxEfX-NyhIAvPeQAZDlIapqvb5SFmgPnyrhrnIm36smLlkrdc_g_2Xw94htkhlHDDAIM77uhU_bGNNSAAcM5zcut2wIfZ-58QEPam8VTRTxsoSfVD9M1yxCrraT-fdo8QbYRUtS_0zpLWUkR5bIvTj7Mu7nDWldVAj4lsjpQ86AJBYNhxqZoNFTLCY2SuEBiJDcErCt2Za1oI3STg8LlFIHHl_5vyWzkRzKZjuY46MYmfcQ; site=ots';

function getResult() {
	//Local site
	// request(url, cookie, 'Local site');

	//Demo site
	request(urlDemo, cookieDemo, 'Demo site');

	//CEP QA site
	// request(urlCEPQA, cookieCEPQA, 'CEPQA site');
}

function request(url, cookie, site) {
	// superagent.agent.options.ca = rootCas;
	superagent
		.get(url)
		.set(
			'User-Agent',
			'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
		)
		.set(
			'Accept',
			'application/json,text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8'
		)
		.set('Cookie', cookie)
		.ca(rootCas)
		.end(function(req, res) {
			if (res && res.text) {
				let arr = res.text.split('.');
				console.log(
					'--- ' + site + ' --- ' + arr[2] + ' --- ' + new Date()
				);
				console.log(res.text);
			} else {
				console.log(res);
			}
		});
}

var time = 1000 * 0.1;
setInterval(getResult, time);

// getResult();
