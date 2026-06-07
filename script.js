function goMemberPage() {

    // 模擬登入狀態
    // true = 已登入
    // false = 未登入

    const isLoggedIn = false;

    if (isLoggedIn) {
        window.location.href = "member.html";
    } else {
        window.location.href = "login.html";
    }
}