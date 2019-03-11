// import { Buffer } from "buffer";
// var Buffer = require('buffer').Buffer;

// function f1(action){
// 	console.log(`${this.name}--${action}`);
// }

// var person = {name:'alex'};

// // f1.call(person, 'study');

// // console.log(~1);

// var num = 5;
// var fun = function(number){
// 	number = 1;
// 	console.log(number);
// };
// fun(num);
// console.log(num);

// var obj = {num: 5};
// var fun2 = function(obj){
// 	var obj1 = Object.assign({}, obj, {num: 1});
// 	console.log(obj1.num);
// };
// fun2(obj);
// console.log(obj.num);

// console.log(new Buffer('qqj0124').toString('base64'));

// var r = [{"Microsite":"InStudio","Claim":["*"]}].filter(l => l.Microsite === 'InStudio');
// console.log(r);

// var r = ['2' ,'1'].indexOf('3');
// console.log(r);

// var micrositeMapper = { dynsim: 'dynsimonline', instudio: 'instudio', ots: 'dynsim', proii: 'proii', training: 'training' };
// var r = micrositeMapper['dyns'];
// if (r === undefined){
// 	console.log('xxx');
// }
// console.log(r);

// let arr = [1,2,3];
// let s = "sss";
// console.log(!(s instanceof Array));

// var arr = [{a:1},{b:2},{c:3}];
// // const reducer = (accumulator, currentValue) => Object.assign(accumulator, currentValue);
// const reducer = (accumulator, currentValue) => { return {...accumulator, ...currentValue}};
// var obj = arr.reduce(reducer, {});
// console.log(obj);

// var a = {b:1,c:2};
// var aa = {bb:1,cc:2};
// var obj = {...a, ...aa};
// console.log(obj);
// function duplicate(arr){
// 	return [...arr, ...arr];
// }
// var arr = duplicate([1,2,3,4,5]);
// console.log(arr);

//Apply Call Bind

// var obj = {text: 'text'};

// function write (s) {

// 	console.log(this.text + ' ' + s);
// }

// var w = write.bind(obj,'xxx');

// w();

//Array Map
// var kvArray = [{key: 1, value: 10},
// 	{key: 2, value: 20},
// 	{key: 3, value: 30}];

// var reformattedArray = kvArray.map(obj =>{
// 	var rObj = {};
// 	rObj[obj.key] = obj.value;
// 	return rObj;
// })
// reformattedArray is now [{1: 10}, {2: 20}, {3: 30}]

// this call
// function fn() {
//     console.log('real', this)  // {a: 100} ，该作用域下的 this 的真实的值

//     var arr = [1, 2, 3]
//     // 普通 JS
//     arr.map(function (item) {
//         console.log('js', this)  // window 。普通函数，这里打印出来的是全局变量，令人费解
//         return item + 1
//     })
//     // 箭头函数
//     arr.map(item => {
//         console.log('es6', this)  // {a: 100} 。箭头函数，这里打印的就是父作用域的 this
//         return item + 1
//     })
// }
// fn.call({a: 100})

// var param = {a: 1, b: 2};
// console.log(param.c);
// console.log(param.c === undefined);

// var r = /^\s/.test('aaa');
// console.log(r);
// var r1 = /\s$/.test(' aaa');
// console.log(r1);

const contents = JSON.parse(`[
	{
		"name": "12",
		"branches": [],
		"owner": "WonderwareDEV",
		"url": "https://cepdevintsiteghe.cloud-engineering-platform.com/WonderwareDEV/12.git",
		"sharedStatus": "All",
		"applicationType": "FreeForm",
		"lastModifiedBy": "chunyanliu@wistronits.com",
		"lastModifiedOn": "2018-09-21T03:05:07.0000000+00:00"
	},
	{
		"name": "1123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789",
		"branches": [],
		"owner": "WonderwareDEV",
		"url": "https://cepdevintsiteghe.cloud-engineering-platform.com/WonderwareDEV/1123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789.git",
		"sharedStatus": "All",
		"applicationType": "FreeForm",
		"lastModifiedBy": "wdsowebtest+test01234567890123456789test01234567890123456789@gmail.com",
		"lastModifiedOn": "2018-09-19T03:28:38.0000000+00:00"
	},
	{
		"name": "0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789",
		"branches": [],
		"owner": "WonderwareDEV",
		"url": "https://cepdevintsiteghe.cloud-engineering-platform.com/WonderwareDEV/0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789.git",
		"sharedStatus": "All",
		"applicationType": "FreeForm",
		"lastModifiedBy": "wdsowebtest+test01234567890123456789@gmail.com",
		"lastModifiedOn": "2018-09-19T03:07:55.0000000+00:00"
	},
	{
		"name": "SASHATEST",
		"branches": [],
		"owner": "WonderwareDEV",
		"url": "https://cepdevintsiteghe.cloud-engineering-platform.com/WonderwareDEV/SASHATEST.git",
		"sharedStatus": "All",
		"applicationType": "FreeForm",
		"lastModifiedBy": "xiaohuizhao@wistronits.com",
		"lastModifiedOn": "2018-09-17T06:04:11.0000000+00:00"
	},
	{
		"name": "pollTest-model",
		"branches": [],
		"owner": "WonderwareDEV",
		"url": "https://cepdevintsiteghe.cloud-engineering-platform.com/WonderwareDEV/pollTest-model.git",
		"sharedStatus": "All",
		"applicationType": "FreeForm",
		"lastModifiedBy": "adam.haskell@schneider-electric.com",
		"lastModifiedOn": "2018-08-21T10:05:37.0000000+00:00"
	},
	{
		"name": "testgrace1",
		"branches": [],
		"owner": "WonderwareDEV",
		"url": "https://cepdevintsiteghe.cloud-engineering-platform.com/WonderwareDEV/testgrace1.git",
		"sharedStatus": "All",
		"applicationType": "FreeForm",
		"lastModifiedBy": "yuyangli@wistronits.com",
		"lastModifiedOn": "2018-07-18T08:42:58.0000000+00:00"
	},
	{
		"name": "DeleteUserTest1",
		"branches": [],
		"owner": "WonderwareDEV",
		"url": "https://cepdevintsiteghe.cloud-engineering-platform.com/WonderwareDEV/DeleteUserTest1.git",
		"sharedStatus": "All",
		"applicationType": "FreeForm",
		"lastModifiedBy": "zack006zf+qa1@gmail.com",
		"lastModifiedOn": "2018-07-18T07:23:45.0000000+00:00"
	},
	{
		"name": "StevenQATestRepo",
		"branches": [],
		"owner": "WonderwareDEV",
		"url": "https://cepdevintsiteghe.cloud-engineering-platform.com/WonderwareDEV/StevenQATestRepo.git",
		"sharedStatus": "All",
		"applicationType": "FreeForm",
		"lastModifiedBy": "steventaowits+admin@gmail.com",
		"lastModifiedOn": "2018-07-12T06:10:43.0000000+00:00"
	},
	{
		"name": "BLM1-model",
		"branches": [
		"QABranchTest",
		"master-chunyanliu@wistronits.com-2018-03-13-11-04-03",
		"master-chunyanliu@wistronits.com-2018-03-13-12-10-04-chunyanliu@wistronits.com-2018-04-09-08-14-41",
		"master-chunyanliu@wistronits.com-2018-03-13-12-10-04-chunyanliu@wistronits.com-2018-04-09-08-14-45",
		"master-chunyanliu@wistronits.com-2018-03-13-12-10-04",
		"master-congliu@wistronits.com-2018-03-13-11-18-03",
		"master-congliu@wistronits.com-2018-03-13-12-09-40"
		],
		"owner": "WonderwareDEV",
		"url": "https://cepdevintsiteghe.cloud-engineering-platform.com/WonderwareDEV/BLM1-model.git",
		"sharedStatus": "All",
		"applicationType": "FreeForm",
		"lastModifiedBy": "chunyanliu@wistronits.com",
		"lastModifiedOn": "2018-05-11T05:44:46.0000000+00:00"
	},
	{
		"name": "QARepositoryTest002",
		"branches": [],
		"owner": "WonderwareDEV",
		"url": "https://cepdevintsiteghe.cloud-engineering-platform.com/WonderwareDEV/QARepositoryTest002.git",
		"sharedStatus": "All",
		"applicationType": "FreeForm",
		"lastModifiedBy": "chunyanliu@wistronits.com",
		"lastModifiedOn": "2018-03-30T08:08:46.0000000+00:00"
	},
	{
		"name": "QARepositoryTest001",
		"branches": [],
		"owner": "WonderwareDEV",
		"url": "https://cepdevintsiteghe.cloud-engineering-platform.com/WonderwareDEV/QARepositoryTest001.git",
		"sharedStatus": "All",
		"applicationType": "FreeForm",
		"lastModifiedBy": "chunyanliu@wistronits.com",
		"lastModifiedOn": "2018-03-30T08:06:28.0000000+00:00"
	},
	{
		"name": "QATest3",
		"branches": [],
		"owner": "WonderwareDEV",
		"url": "https://cepdevintsiteghe.cloud-engineering-platform.com/WonderwareDEV/QATest3.git",
		"sharedStatus": "All",
		"applicationType": "FreeForm",
		"lastModifiedBy": "chunyanliu@wistronits.com",
		"lastModifiedOn": "2018-03-30T06:38:26.0000000+00:00"
	},
	{
		"name": "IntegrationDynsimForDevTeam",
		"branches": [
		"master-chunyanliu@wistronits.com-2017-10-25-07-53-41",
		"master-chunyanliu@wistronits.com-2017-10-25-07-53-46",
		"master-chunyanliu@wistronits.com-2017-10-25-08-57-08",
		"master-chunyanliu@wistronits.com-2017-10-25-08-57-13",
		"master-chunyanliu@wistronits.com-2017-10-27-10-04-49"
		],
		"owner": "WonderwareDEV",
		"url": "https://cepdevintsiteghe.cloud-engineering-platform.com/WonderwareDEV/IntegrationDynsimForDevTeam.git",
		"sharedStatus": "All",
		"applicationType": "FreeForm",
		"lastModifiedBy": "chunyanliu@wistronits.com",
		"lastModifiedOn": "2018-03-14T06:08:17.0000000+00:00"
	},
	{
		"name": "Test0117",
		"branches": [],
		"owner": "WonderwareDEV",
		"url": "https://cepdevintsiteghe.cloud-engineering-platform.com/WonderwareDEV/Test0117.git",
		"sharedStatus": "All",
		"applicationType": "FreeForm",
		"lastModifiedBy": "fengzhang@wistronits.com",
		"lastModifiedOn": "2018-01-17T02:09:16.0000000+00:00"
	},
	{
		"name": "Longbranch",
		"branches": [
		"Branch1234567890Branch1234567890Branch1234567890Branch1234567890Branch1234567890Branch1234567890Branch1234567890Branch1234567890Branch1234567890Branch1234567890Branch1234567890Branch1234567890",
		"Verylongbranch150characterVerylongbranch150characterVerylongbranch150characterVerylongbranch150characterVerylongbranch150characterVerylongbranch150character"
		],
		"owner": "WonderwareDEV",
		"url": "https://cepdevintsiteghe.cloud-engineering-platform.com/WonderwareDEV/Longbranch.git",
		"sharedStatus": "All",
		"applicationType": "FreeForm",
		"lastModifiedBy": "chunyanliu@wistronits.com",
		"lastModifiedOn": "2017-12-21T07:20:08.0000000+00:00"
	},
	{
		"name": "RepoBranchSelectionTest",
		"branches": [
		"QABranchTest",
		"master-chunyanliu@wistronits.com-2017-12-06-11-32-20"
		],
		"owner": "WonderwareDEV",
		"url": "https://cepdevintsiteghe.cloud-engineering-platform.com/WonderwareDEV/RepoBranchSelectionTest.git",
		"sharedStatus": "All",
		"applicationType": "FreeForm",
		"lastModifiedBy": "chunyanliu@wistronits.com",
		"lastModifiedOn": "2017-12-06T11:32:15.0000000+00:00"
	},
	{
		"name": "TestDevOpsRepository",
		"branches": [],
		"owner": "WonderwareDEV",
		"url": "https://cepdevintsiteghe.cloud-engineering-platform.com/WonderwareDEV/TestDevOpsRepository.git",
		"sharedStatus": "All",
		"applicationType": "FreeForm",
		"lastModifiedBy": "ripal.soni@einfochips.com",
		"lastModifiedOn": "2017-11-22T09:21:50.0000000+00:00"
	},
	{
		"name": "jennyTestMultipleBranch",
		"branches": [
		"JennyBranch1",
		"JennyBranch2-jianlihu@wistronits.com-2017-10-31-10-01-18",
		"JennyBranch2",
		"JennyBranch3",
		"master-jianlihu@wistronits.com-2017-10-31-10-34-17"
		],
		"owner": "WonderwareDEV",
		"url": "https://cepdevintsiteghe.cloud-engineering-platform.com/WonderwareDEV/jennyTestMultipleBranch.git",
		"sharedStatus": "All",
		"applicationType": "FreeForm",
		"lastModifiedBy": "jianlihu@wistronits.com",
		"lastModifiedOn": "2017-10-31T10:23:41.0000000+00:00"
	},
	{
		"name": "BranchTest0920",
		"branches": [
		"QATest",
		"QATest1"
		],
		"owner": "WonderwareDEV",
		"url": "https://cepdevintsiteghe.cloud-engineering-platform.com/WonderwareDEV/BranchTest0920.git",
		"sharedStatus": "All",
		"applicationType": "FreeForm",
		"lastModifiedBy": "tiger@qq.com",
		"lastModifiedOn": "2017-10-20T07:24:57.0000000+00:00"
	},
	{
		"name": "BLM2-model",
		"branches": [],
		"owner": "WonderwareDEV",
		"url": "https://cepdevintsiteghe.cloud-engineering-platform.com/WonderwareDEV/BLM2-model.git",
		"sharedStatus": "All",
		"applicationType": "FreeForm",
		"lastModifiedBy": "jianlihu@wistronits.com",
		"lastModifiedOn": "2017-08-29T06:20:04.0000000+00:00"
	},
	{
		"name": "BLM2-HMI",
		"branches": [],
		"owner": "WonderwareDEV",
		"url": "https://cepdevintsiteghe.cloud-engineering-platform.com/WonderwareDEV/BLM2-HMI.git",
		"sharedStatus": "All",
		"applicationType": "FreeForm",
		"lastModifiedBy": "jianlihu@wistronits.com",
		"lastModifiedOn": "2017-08-29T06:11:38.0000000+00:00"
	},
	{
		"name": "OnDemandModelRepo",
		"branches": [],
		"owner": "WonderwareDEV",
		"url": "https://cepdevintsiteghe.cloud-engineering-platform.com/WonderwareDEV/OnDemandModelRepo.git",
		"sharedStatus": "All",
		"applicationType": "FreeForm",
		"lastModifiedBy": "roy.li@schneider-electric.com",
		"lastModifiedOn": "2017-06-28T10:24:10.0000000+00:00"
	},
	{
		"name": "BLM1-HMI",
		"branches": [],
		"owner": "WonderwareDEV",
		"url": "https://cepdevintsiteghe.cloud-engineering-platform.com/WonderwareDEV/BLM1-HMI.git",
		"sharedStatus": "All",
		"applicationType": "FreeForm",
		"lastModifiedBy": "huwang@wistronits.com",
		"lastModifiedOn": "2017-06-20T08:45:36.0000000+00:00"
	},
	{
		"name": "Dynsim531Model",
		"branches": [],
		"owner": "WonderwareDEV",
		"url": "https://cepdevintsiteghe.cloud-engineering-platform.com/WonderwareDEV/Dynsim531Model.git",
		"sharedStatus": "All",
		"applicationType": "FreeForm",
		"lastModifiedBy": "jianhuang@wistronits.com",
		"lastModifiedOn": "2017-04-14T04:32:48.0000000+00:00"
	},
	{
		"name": "DynsimDemo",
		"branches": [
		"jianhuang-patch-1"
		],
		"owner": "WonderwareDEV",
		"url": "https://cepdevintsiteghe.cloud-engineering-platform.com/WonderwareDEV/DynsimDemo.git",
		"sharedStatus": "All",
		"applicationType": "FreeForm",
		"lastModifiedBy": "jianhuang@wistronits.com",
		"lastModifiedOn": "2017-04-07T04:05:33.0000000+00:00"
	},
	{
		"name": "BLM2IntouchDemo",
		"branches": [],
		"owner": "WonderwareDEV",
		"url": "https://cepdevintsiteghe.cloud-engineering-platform.com/WonderwareDEV/BLM2IntouchDemo.git",
		"sharedStatus": "All",
		"applicationType": "FreeForm",
		"lastModifiedBy": "george.chou@non.schneider-electric.com",
		"lastModifiedOn": "2017-03-28T05:31:36.0000000+00:00"
	},
	{
		"name": "DynsimDemoIntouch",
		"branches": [],
		"owner": "WonderwareDEV",
		"url": "https://cepdevintsiteghe.cloud-engineering-platform.com/WonderwareDEV/DynsimDemoIntouch.git",
		"sharedStatus": "All",
		"applicationType": "FreeForm",
		"lastModifiedBy": "george.chou@non.schneider-electric.com",
		"lastModifiedOn": "2017-03-28T03:54:40.0000000+00:00"
	}
  ]`);

for (const repo in contents) {
	console.log(repo);
}

// console.log(contents);
