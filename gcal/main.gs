function gcal() {
  //　スプレッドシートを読み込む
  var sp = SpreadsheetApp.getActiveSheet(); 

  // スプレッドシートをクリア
  sp.clear();

  //　カレンダーをIDで読み込む
  var cal = CalendarApp.getCalendarById('カレンダーID'); 

  //　カレンダーのイベントの期間を指定
  var date = new Date();
  var today = new Date(date.getFullYear(),date.getMonth(),date.getDate(),0,0);　　　
  var endday = new Date(date.getFullYear(),date.getMonth(),date.getDate()+14,23,59); // 2週間後
  
  var event　=　cal.getEvents(today,endday); 

  //　イベントをスプレッドシートへ書き出す
  for (var i=1; i<event.length+1; i++) {
    sp.getRange('a'+i).setValue(event[i-1].getTitle()); // イベントタイトル
    sp.getRange('b'+i).setValue(event[i-1].getStartTime()); // イベント開始時刻　　
    sp.getRange('c'+i).setValue(event[i-1].getEndTime()); // イベント終了時刻
    sp.getRange('d'+i).setValue("=round((rc[-1]-rc[-2])*24*60,0)"); // 所要時間 　　
  }
};
