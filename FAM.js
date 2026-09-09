const infoMap = {
  upcoming: `
    <div class="home-outline">
      <ul>
        <li><span class="content-item" data-content="zimmer_0919">Zimmer_0919</span></li>
        <li><span class="content-item" data-content="kob_2703">Kob_2703</span></li>
      </ul>
    </div>
  `,
  zimmer_0919: `<h2>Zimmer_0919</h2><p>This is Zimmer_0919.</p>`,
  kob_2703: `<h2>Kob_2703</h2><p>This is Kob_2703.</p>`,
  "jf-class": `
    <div class="home-outline">
      <ul>
        <li><span class="content-item" data-content="jf_meimei">JF_MeiMei</span></li>
        <li><span class="content-item" data-content="jf_jenjen">JF_JenJen</span></li>
      </ul>
    </div>
  `,
  jf_meimei: `<h2>JF_MeiMei</h2>
   <table class="schedule-table">
      <colgroup>
        <col class="col-period">
        <col class="col-day" span="5">
      </colgroup>
      <thead>
        <tr>
          <th>節次\\星期</th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
        </tr>
      </thead>
      <tbody>
        <tr class="break-row">
          <td colspan="6">Morning<br>08:00~8:35</td>
        </tr>
        <tr>
          <th>第一節<br>08:00~8:35</th>
          <td>國語</td>
          <td>國語</td>
          <td>自然</td>
          <td>國語</td>
          <td>生活</td>
        </tr>
        <tr>
          <th>第二節<br>09:30~10:10</th>
          <td>數學</td>
          <td>數學</td>
          <td>自然</td>
          <td>數學</td>
          <td>國際</td>
        </tr>
        <tr class="break-row">
          <td colspan="6">大下課<br>10:10~10:30</td>
        </tr>
        <tr>
          <th>第三節<br>10:30~11:10</th>
          <td>本土</td>
          <td class="subject-pe">體育</td>
          <td>國語</td>
          <td class="subject-pe">體育</td>
          <td>國語</td>
        </tr>
        <tr>
          <th>第四節<br>11:20~12:00</th>
          <td>閱讀</td>
          <td>數位</td>
          <td>數學</td>
          <td>音樂</td>
          <td>社會</td>
        </tr>
        <tr class="break-row">
          <td colspan="6">午休<br>12:40~13:10</td>
        </tr>
        <tr>
          <th>第五節<br>13:20~14:00</th>
          <td>社會</td>
          <td>綜合</td>
          <td></td>
          <td>健康</td>
          <td></td>
        </tr>
        <tr>
          <th>第六節<br>14:10~14:50</th>
          <td>綜合</td>
          <td>社會</td>
          <td></td>
          <td>美勞</td>
          <td></td>
        </tr>
        <tr>
          <th>第七節<br>15:00~15:40</th>
          <td>自然</td>
          <td>英語</td>
          <td></td>
          <td>美勞</td>
          <td></td>
        </tr>
		  <tr class="break-row">
          <td colspan="6">放學<br>12:40 or 15:40</td>
        </tr>
        <tr>
          <th>社團<br>12:50~14:20</th>
          <td></td>
          <td></td>
          <td class="subject-gp">羽球</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  `,
  jf_jenjen: `
    <h2>JF_JenJen</h2>
    <table class="schedule-table">
      <colgroup>
        <col class="col-period">
        <col class="col-day" span="5">
      </colgroup>
      <thead>
        <tr>
          <th>節次\\星期</th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
        </tr>
      </thead>
      <tbody>
        <tr class="break-row">
          <td colspan="6">Morning<br>08:00~8:35</td>
        </tr>
        <tr>
          <th>第一節<br>08:00~8:35</th>
          <td>數學</td>
          <td>國語</td>
          <td>數學</td>
          <td>客家語</td>
          <td class="subject-pe">體育</td>
        </tr>
        <tr>
          <th>第二節<br>09:30~10:10</th>
          <td>生活探究家</td>
          <td>國語</td>
          <td>國語</td>
          <td>數學</td>
          <td>國語</td>
        </tr>
        <tr class="break-row">
          <td colspan="6">大下課<br>10:10~10:30</td>
        </tr>
        <tr>
          <th>第三節<br>10:30~11:10</th>
          <td>國語</td>
          <td class="subject-pe">體育</td>
          <td>國際外交家</td>
          <td>國語</td>
          <td>音樂</td>
        </tr>
        <tr>
          <th>第四節<br>11:20~12:00</th>
          <td>健康與教育</td>
          <td>數學</td>
          <td>生活</td>
          <td>生活</td>
          <td>生活</td>
        </tr>
        <tr class="break-row">
          <td colspan="6">午休<br>12:40~13:10</td>
        </tr>
        <tr>
          <th>第五節<br>13:20~14:00</th>
          <td></td>
          <td>美勞</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th>第六節<br>14:10~14:50</th>
          <td></td>
          <td>美勞</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th>第七節<br>15:00~15:40</th>
          <td></td>
          <td>閱讀豐四季</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
		  <tr class="break-row">
          <td colspan="6">放學<br>12:40 or 15:40</td>
        </tr>
        <tr>
          <th>社團<br>12:50~14:20</th>
          <td></td>
          <td></td>
           <td class="subject-gp">科學</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  `,
  "ifei-class": `
    <div class="home-outline">
      <ul>
        <li><span class="content-item" data-content="ifei_meimei">IFei_MeiMei</span></li>
        <li><span class="content-item" data-content="ifei_jenjen">IFei_JenJen</span></li>
      </ul>
    </div>
  `,
  ifei_meimei: `
    <h2>IFei_MeiMei</h2>
    <table class="schedule-table">
      <colgroup>
        <col class="col-period">
        <col class="col-day" span="5">
      </colgroup>
      <thead>
        <tr>
          <th>節次\\星期</th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
        </tr>
      </thead>
      <tbody>
        <tr class="break-row">
          <td colspan="6">午睡<br>13:00~14:00</td>
        </tr>
        <tr>
          <th>unknow</th>
          <td></td>
          <td></td>
          <td>16:00-17:00 口語表達進階</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th>14:30~15:30</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th>15:30~16:30</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th>16:30~17:30</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th>17:30~18:30</th>
          <td></td>
          <td>英文</td>
          <td></td>
          <td>英文</td>
          <td>英文</td>
        </tr>
      </tbody>
    </table>
  `,
  ifei_jenjen: `
    <h2>IFei_JenJen</h2>
    <table class="schedule-table">
      <colgroup>
        <col class="col-period">
        <col class="col-day" span="5">
      </colgroup>
      <thead>
        <tr>
          <th>節次\\星期</th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
        </tr>
      </thead>
      <tbody>
        <tr class="break-row">
          <td colspan="6">午睡<br>13:00~14:00</td>
        </tr>
        <tr>
          <th>unknow</th>
          <td>蒙氏</td>
          <td></td>
          <td></td>
          <td>蒙氏</td>
          <td></td>
        </tr>
        <tr>
          <th>14:30~15:30</th>
          <td></td>
          <td></td>
          <td></td>
          <td>英文</td>
          <td>英文</td>
        </tr>
        <tr>
          <th>15:30~16:30</th>
          <td>英文</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th>16:30~17:30</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th>17:30~18:30</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  `,
  calendar: `
    <div class="home-outline">
      <ul>
        <li><span class="content-item" data-content="twn_115">TWN_115</span></li>
        <li><span class="content-item" data-content="sch_115_01">SCH_115_01</span></li>
        <li><span class="content-item" data-content="sch_115_02">SCH_115_02</span></li>
      </ul>
    </div>
  `,
  twn_115: `<h2>TWN_115</h2><img src="IMG_5855.png" alt="IMG_5855">`,
  sch_115_01: `<h2>SCH_115_01</h2><img src="IMG_5864.jpeg" alt="IMG_5864">`,
  sch_115_02: `<h2>SCH_115_02</h2><img src="IMG_8553.jpeg" alt="IMG_5853.">`
};

const visitedItems = new Set();

const sidebarA = document.querySelectorAll(".sidebar a");
const rightContent = document.getElementById("rightcontent");
const rightTop = document.querySelector(".righttop");

function showContent(key) {
  if (!infoMap[key]) return;
  
  // 記錄此項目已被訪問
  visitedItems.add(key);
  
  rightContent.innerHTML = infoMap[key];
  
  // 標題保持右側頂欄文字，不隨內容切換
  
  // 為新內容中的 content-item 添加點擊事件和訪問狀態
  const contentItems = rightContent.querySelectorAll('.content-item');
  contentItems.forEach(function(item) {
    const contentKey = item.dataset.content;
    
    // 如果已訪問過，添加 visited 類
    if (visitedItems.has(contentKey)) {
      item.classList.add('visited');
    }
    
    item.addEventListener('click', function() {
      showContent(contentKey);
    });
  });
}

sidebarA.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    showContent(this.dataset.info);
  });
});

showContent("upcoming");
