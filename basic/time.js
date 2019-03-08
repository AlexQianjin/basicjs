// const timeoutTime = new Date(Date.now());
// timeoutTime.setMinutes(timeoutTime.getMinutes() + 30);
// console.log(timeoutTime);

let project = {projectName: 'project name', nodes: [{nodeName: 'node name 1', parameters: [{keyName: 'keyName1', value: 'value1'}, {keyName: 'keyName2', value: 'value2'}]}]};
let r = JSON.stringify(project);
console.log(r);