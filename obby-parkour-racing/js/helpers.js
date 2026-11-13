// Выключаем появление меню при правом клике мыши
document.addEventListener('contextmenu', event => event.preventDefault());
const canvas = document.querySelector("#unity-canvas");
// Возвращаем фокус, если кликнули по экрану
function FocusGame() {
    window.focus();
    canvas.focus();
}

window.addEventListener('pointerdown', () => {
    FocusGame();
});
window.addEventListener('touchstart', () => {
    FocusGame();
});

document.addEventListener('visibilitychange', function () {
    if (ysdk !== null && initGame == true) {
        if (document.hidden) {
            myGameInstance.SendMessage('YandexGame', 'OnVisibilityGameWindow', 'false');
        }
        else {
            myGameInstance.SendMessage('YandexGame', 'OnVisibilityGameWindow', 'true');

            if ((ysdk.deviceInfo.isMobile() || ysdk.deviceInfo.isTablet()) && ysdk.screen.fullscreen.status == 'off')
                ysdk.screen.fullscreen.request();
        }
    }
});
