gdjs.StartMenuCode = {};
gdjs.StartMenuCode.localVariables = [];
gdjs.StartMenuCode.GDReset_9595TimerObjects1= [];
gdjs.StartMenuCode.GDReset_9595TimerObjects2= [];
gdjs.StartMenuCode.GDReset_9595TimerObjects3= [];
gdjs.StartMenuCode.GDReset_9595TimerObjects4= [];
gdjs.StartMenuCode.GDReset_9595ButtonObjects1= [];
gdjs.StartMenuCode.GDReset_9595ButtonObjects2= [];
gdjs.StartMenuCode.GDReset_9595ButtonObjects3= [];
gdjs.StartMenuCode.GDReset_9595ButtonObjects4= [];


gdjs.StartMenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Reset_Button"), gdjs.StartMenuCode.GDReset_9595ButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Reset_Timer"), gdjs.StartMenuCode.GDReset_9595TimerObjects1);
{for(var i = 0, len = gdjs.StartMenuCode.GDReset_9595ButtonObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDReset_9595ButtonObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2) - ((gdjs.StartMenuCode.GDReset_9595ButtonObjects1[i].getWidth()) / 2));
}
}{for(var i = 0, len = gdjs.StartMenuCode.GDReset_9595ButtonObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDReset_9595ButtonObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 1, 1, 5, 0.3, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.StartMenuCode.GDReset_9595TimerObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDReset_9595TimerObjects1[i].hide();
}
}}

}


};gdjs.StartMenuCode.mapOfGDgdjs_9546StartMenuCode_9546GDReset_95959595ButtonObjects2Objects = Hashtable.newFrom({"Reset_Button": gdjs.StartMenuCode.GDReset_9595ButtonObjects2});
gdjs.StartMenuCode.mapOfGDgdjs_9546StartMenuCode_9546GDReset_95959595ButtonObjects1Objects = Hashtable.newFrom({"Reset_Button": gdjs.StartMenuCode.GDReset_9595ButtonObjects1});
gdjs.StartMenuCode.asyncCallback18711452 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.StartMenuCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainGame", false);
}gdjs.StartMenuCode.localVariables.length = 0;
}
gdjs.StartMenuCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.StartMenuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.StartMenuCode.asyncCallback18711452(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.StartMenuCode.asyncCallback18709060 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.StartMenuCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Reset_Timer"), gdjs.StartMenuCode.GDReset_9595TimerObjects3);

{for(var i = 0, len = gdjs.StartMenuCode.GDReset_9595TimerObjects3.length ;i < len;++i) {
    gdjs.StartMenuCode.GDReset_9595TimerObjects3[i].getBehavior("Text").setText("1");
}
}{for(var i = 0, len = gdjs.StartMenuCode.GDReset_9595TimerObjects3.length ;i < len;++i) {
    gdjs.StartMenuCode.GDReset_9595TimerObjects3[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2) - ((gdjs.StartMenuCode.GDReset_9595TimerObjects3[i].getWidth()) / 2));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "ResetTimer.wav", false, 50, 1.2);
}{for(var i = 0, len = gdjs.StartMenuCode.GDReset_9595TimerObjects3.length ;i < len;++i) {
    gdjs.StartMenuCode.GDReset_9595TimerObjects3[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 7, 7, 7, 0.08, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.StartMenuCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.StartMenuCode.localVariables.length = 0;
}
gdjs.StartMenuCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.StartMenuCode.localVariables);
for (const obj of gdjs.StartMenuCode.GDReset_9595TimerObjects2) asyncObjectsList.addObject("Reset_Timer", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.StartMenuCode.asyncCallback18709060(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.StartMenuCode.asyncCallback18708628 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.StartMenuCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Reset_Timer"), gdjs.StartMenuCode.GDReset_9595TimerObjects2);

{for(var i = 0, len = gdjs.StartMenuCode.GDReset_9595TimerObjects2.length ;i < len;++i) {
    gdjs.StartMenuCode.GDReset_9595TimerObjects2[i].getBehavior("Text").setText("2");
}
}{for(var i = 0, len = gdjs.StartMenuCode.GDReset_9595TimerObjects2.length ;i < len;++i) {
    gdjs.StartMenuCode.GDReset_9595TimerObjects2[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2) - ((gdjs.StartMenuCode.GDReset_9595TimerObjects2[i].getWidth()) / 2));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "ResetTimer.wav", false, 40, 1);
}{for(var i = 0, len = gdjs.StartMenuCode.GDReset_9595TimerObjects2.length ;i < len;++i) {
    gdjs.StartMenuCode.GDReset_9595TimerObjects2[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 4, 4, 4, 0.08, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.StartMenuCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.StartMenuCode.localVariables.length = 0;
}
gdjs.StartMenuCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.StartMenuCode.localVariables);
for (const obj of gdjs.StartMenuCode.GDReset_9595TimerObjects1) asyncObjectsList.addObject("Reset_Timer", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.StartMenuCode.asyncCallback18708628(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.StartMenuCode.eventsList4 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Reset_Button"), gdjs.StartMenuCode.GDReset_9595ButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickedObjectsCount(gdjs.StartMenuCode.mapOfGDgdjs_9546StartMenuCode_9546GDReset_95959595ButtonObjects2Objects) > 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18706196);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.StartMenuCode.GDReset_9595ButtonObjects2 */
{for(var i = 0, len = gdjs.StartMenuCode.GDReset_9595ButtonObjects2.length ;i < len;++i) {
    gdjs.StartMenuCode.GDReset_9595ButtonObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Start");
}{gdjs.evtTools.sound.playSound(runtimeScene, "MenuButtomPress.wav", false, 30, 1);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Reset_Button"), gdjs.StartMenuCode.GDReset_9595ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickedObjectsCount(gdjs.StartMenuCode.mapOfGDgdjs_9546StartMenuCode_9546GDReset_95959595ButtonObjects1Objects) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(18707708);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Reset_Timer"), gdjs.StartMenuCode.GDReset_9595TimerObjects1);
{for(var i = 0, len = gdjs.StartMenuCode.GDReset_9595TimerObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDReset_9595TimerObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.StartMenuCode.GDReset_9595TimerObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDReset_9595TimerObjects1[i].getBehavior("Text").setText("3");
}
}{for(var i = 0, len = gdjs.StartMenuCode.GDReset_9595TimerObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDReset_9595TimerObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2) - ((gdjs.StartMenuCode.GDReset_9595TimerObjects1[i].getWidth()) / 2));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "ResetTimer.wav", false, 30, 0.8);
}{for(var i = 0, len = gdjs.StartMenuCode.GDReset_9595TimerObjects1.length ;i < len;++i) {
    gdjs.StartMenuCode.GDReset_9595TimerObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.5, 2, 2, 2, 0.08, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.StartMenuCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.StartMenuCode.eventsList5 = function(runtimeScene) {

{


gdjs.StartMenuCode.eventsList0(runtimeScene);
}


{


gdjs.StartMenuCode.eventsList4(runtimeScene);
}


};

gdjs.StartMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartMenuCode.GDReset_9595TimerObjects1.length = 0;
gdjs.StartMenuCode.GDReset_9595TimerObjects2.length = 0;
gdjs.StartMenuCode.GDReset_9595TimerObjects3.length = 0;
gdjs.StartMenuCode.GDReset_9595TimerObjects4.length = 0;
gdjs.StartMenuCode.GDReset_9595ButtonObjects1.length = 0;
gdjs.StartMenuCode.GDReset_9595ButtonObjects2.length = 0;
gdjs.StartMenuCode.GDReset_9595ButtonObjects3.length = 0;
gdjs.StartMenuCode.GDReset_9595ButtonObjects4.length = 0;

gdjs.StartMenuCode.eventsList5(runtimeScene);
gdjs.StartMenuCode.GDReset_9595TimerObjects1.length = 0;
gdjs.StartMenuCode.GDReset_9595TimerObjects2.length = 0;
gdjs.StartMenuCode.GDReset_9595TimerObjects3.length = 0;
gdjs.StartMenuCode.GDReset_9595TimerObjects4.length = 0;
gdjs.StartMenuCode.GDReset_9595ButtonObjects1.length = 0;
gdjs.StartMenuCode.GDReset_9595ButtonObjects2.length = 0;
gdjs.StartMenuCode.GDReset_9595ButtonObjects3.length = 0;
gdjs.StartMenuCode.GDReset_9595ButtonObjects4.length = 0;


return;

}

gdjs['StartMenuCode'] = gdjs.StartMenuCode;
