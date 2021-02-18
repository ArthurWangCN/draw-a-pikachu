!function () {
    let duration = 50;
    let btns = document.querySelector('.btn-wrapper');
    let btn = document.querySelectorAll('.btn');
    console.log(btn)
    btns.onclick = e => {
        console.log(e.target.nodeName);
        let speed = e.target.dataset.speed;
        if (e.target.nodeName.toUpperCase() === 'SPAN') {
            btn.forEach(item => {
                item.style.backgroundColor = 'lightsteelblue';
            })
            e.target.style.backgroundColor = 'lightcoral';
        }
        switch (speed) {
            case 'slow':
                duration = 100;
                break;
            case 'normal':
                duration = 50;
                break;
            case 'fast':
                duration = 10;
                break;
        }
        console.log(duration)
    }
    function writeCode(prefix, code, fn) {
        let container = document.querySelector('#code');
        let styl = document.querySelector('#styl');
        let n = 0;
        setTimeout(function draw() {
            n += 1;
            container.innerHTML = code.substring(0, n);
            styl.innerHTML = code.substring(0, n);
            container.scrollTop = container.scrollHeight;
            if (n <= code.length) {
                setTimeout(() => {
                    draw()
                }, duration);
            } else {
                fn && fn.call()
            }
        }, duration);
    }
    let styleCode = `
    /**
      * 准备画一只皮卡丘
      */
    /**
      * 首先，画一个鼻子
      */
    .nose {
        width: 0;
        height: 0;
        border-radius: 12px;
        border-width: 12px;
        border-style: solid;
        border-color: #000 transparent transparent;
        position: absolute;
        left: 50%;
        top: 28px;
        transform: translateX(-50%);
    }
    
    /**
      * 接着就要画皮卡丘的眼睛了
      */
    .eye {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #2e2e2e;
        position: absolute;
    }
    
    /**
      * 左眼放到左边
      */
    .eye.left {
        right: 50%;
        margin-right: 90px;
    }
    
    /**
      * 右眼放到右边
      */
    .eye.right {
        left: 50%;
        margin-left: 90px;
    }
    
    /**
      * 画一个大眼珠
      */
    .eye::before {
        content: '';
        display: block;
        width: 24px;
        height: 24px;
        background-color: #fff;
        border-radius: 50%;
        border: 2px solid #000;
        position: absolute;
        left: 6px;
        top: 3px;
    }
    
    /**
      * 接下来画皮卡丘的腮红
      */
    .face {
        width: 68px;
        height: 68px;
        border-radius: 50%;
        border: 2px solid #000;
        background-color: #fc0d1c;
        position: absolute;
        top: 85px;
    }
    
    .face.left {
        right: 50%;
        margin-right: 116px;
    }
    
    .face.right {
        left: 50%;
        margin-left: 116px;
    }
    
    /**
      * 给皮卡丘加个八字胡
      */
    .mastache {
        width: 80px;
        height: 22px;
        border: 3px solid #000;
        position: absolute;
        top: 48px;
        background-color: #fee433;
    }
    .mastache.left {
        right: 50%;
        border-bottom-left-radius: 40px 20px;
        border-top: none;
        border-right: none;
        transform: rotate(-20deg);
    }
    .mastache.right {
        left: 50%;
        border-bottom-right-radius: 40px 20px;
        border-top: none;
        border-left: none;
        transform: rotate(20deg);
    }
    
    /**
      * 最后画皮卡丘的嘴巴
      */
    .tongue-wrapper {
        width: 300px;
        height: 125px;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        overflow: hidden;
        z-index: -1;
    }
    .tongue {
        width: 300px;
        height: 3000px;
        background-color: #990513;
        position: absolute;
        bottom: 0;
        border-radius: 200px/2000px;
        overflow: hidden;
        border: 2px solid #000;
    }
    /**
      * 给皮卡丘加个粉粉的舌头
      */
    .tongue::after {
        width: 100px;
        height: 100px;
        position: absolute;
        display: block;
        bottom: -20px;
        left: 50%;
        transform: translateX(-50%);
        content: '';
        border-radius: 50%;
        background-color: #fc4a62;
    }
    
    /**
      * 好了，一个简单的皮卡丘就画好了
      */`;
    writeCode('', styleCode);
}.call()
