gdjs.LeaderboardCode = {};
gdjs.LeaderboardCode.localVariables = [];


gdjs.LeaderboardCode.eventsList0 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.leaderboards.isLeaderboardViewLoaded());
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};

gdjs.LeaderboardCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();


gdjs.LeaderboardCode.eventsList0(runtimeScene);


return;

}

gdjs['LeaderboardCode'] = gdjs.LeaderboardCode;
