<script>
  (function() {
    const collector = 'https://stats.reich.tf';
    const pageId = 'p1008';
    const url = location.pathname + location.search + location.hash;
    const hash = location.hash;

    let ref = document.referrer;
    const lastPage = localStorage.getItem('last_page');
    if (!ref && lastPage) {
      ref = lastPage;
    }
    localStorage.setItem('last_page', location.pathname + location.search);

    let sid = localStorage.getItem('sid');
    if (!sid) {
      sid = 's_' + Math.random().toString(36).slice(2, 12);
      localStorage.setItem('sid', sid);
    }

    const payload = {
      page: pageId,
      u: url,
      hash: hash,
      sid: sid,
      r: ref,
      screen: {
        width: window.screen.width,
        height: window.screen.height
      },
      ua_full: navigator.userAgent
    };

    fetch(collector, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      keepalive: true
    });
  })();
</script>
