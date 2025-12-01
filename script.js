window.onload = function () {
  const spinner = document.getElementById("loading");
  spinner.classList.add("loaded");
};


document.addEventListener('DOMContentLoaded', () => {
  const drawerInput = document.getElementById('drawer_input');
  const navItems = document.querySelectorAll('.nav_item a');

  navItems.forEach(item => {
      item.addEventListener('click', () => {
          drawerInput.checked = false;
      });
  });

  // サブメニュー用トグル（モバイルでの開閉）
  const submenuToggles = document.querySelectorAll('.submenu-toggle');
  submenuToggles.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const li = btn.closest('.has-submenu');
      if (!li) return;
      const open = li.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });

  // メニュー外クリックでサブメニューを閉じる
  document.addEventListener('click', (e) => {
    const nav = document.querySelector('.nav_content');
    if (!nav) return;
    if (!nav.contains(e.target)) {
      document.querySelectorAll('.has-submenu.open').forEach(li => {
        li.classList.remove('open');
        const btn = li.querySelector('.submenu-toggle');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      });
    }
  });
});
