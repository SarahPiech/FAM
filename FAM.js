const infoMap = {
  home: `
    <div class="home-outline">
      <ul>
        <li><span class="content-item" data-content="home1">2027_1H_重要行事曆</span></li>
        <li><span class="content-item" data-content="home2">第二篇文章</span></li>
      </ul>
    </div>
  `,
  home1: `<h2>2027_1H_重要行事曆</h2><img src="IMG_5853.jpeg" alt="5832">`,
  home2: `<h2>第二篇文章</h2><p>這是首頁的第二篇文章。</p>`,
  articles: `
    <div class="home-outline">
      <ul>
        <li><span class="content-item" data-content="article1">Article 1</span></li>
        <li><span class="content-item" data-content="article2">Article 2</span></li>
      </ul>
    </div>
  `,
  article1: `<h2>Article 1</h2><p>This is Article 1.</p>`,
  article2: `<h2>Article 2</h2><p>This is Article 2.</p>`,
  about: `
    <div class="home-outline">
      <ul>
        <li><span class="content-item" data-content="about1">About 1</span></li>
        <li><span class="content-item" data-content="about2">About 2</span></li>
      </ul>
    </div>
  `,
  about1: `<h2>About 1</h2><p>This is About 1.</p>`,
  about2: `<h2>About 2</h2><p>This is About 2.</p>`
};

// 移除 titleMap，因為標題永遠是 "Home"
// 追蹤已訪問的項目
const visitedItems = new Set();

const sidebarA = document.querySelectorAll(".sidebar a");
const rightContent = document.getElementById("rightcontent");
const rightTop = document.querySelector(".righttop");

function showContent(key) {
  if (!infoMap[key]) return;
  
  // 記錄此項目已被訪問
  if (key.startsWith('home') || key.startsWith('article') || key.startsWith('about')) {
    visitedItems.add(key);
  }
  
  rightContent.innerHTML = infoMap[key];
  
  // 標題永遠保持 "Home"，不會改變
  // rightTop.textContent 不需要更新，因為 HTML 中已經設定為 "Home"
  
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

showContent("home");
