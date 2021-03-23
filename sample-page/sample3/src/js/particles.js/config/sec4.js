const getWidth = () => {
  return window.innerWidth;
}

const per = async () => {
  const width = await getWidth();

    particlesJS("js-sec4", {
      "particles": {
        "number": {
          "value": 50,
          "density": {
            "enable": true,
            "value_area": 300
          }
        },
        "color":{
          "value":"#24c6dc"
        },
        "shape": {
          "type": "circle",
        "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides":5
      },
      "image":{
        "src":"img/github.svg",
        "width":100,
        "height":100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable":false,
        "speed":1,
        "opacity_min":0.1,
        "sync":false
      }
    },
    "size":{
      "value":8,
        "random":true,
        "anim": {
          "enable":false,
          "speed":40,
          "size_min":0.1,
          "sync":false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#bbbbbb",
        "opacity": 0.4,
        "width": 2
      },
      "move": {
        "enable":false,
        "speed":6,
        "direction":"none",
        "random":false,
        "straight":false,
        "out_mode":"out",
        "bounce":false,
        "attract": {
          "enable":false,
          "rotateX":600,
          "rotateY":1200
        }
      }
    },
      "interactivity":{
        "detect_on":"canvas",
        "events":{
          "onhover":{
            "enable":true,
            "mode":"repulse"
          },
          "onclick":{
            "enable":true,
            "mode":"push"
          },
          "resize":true
        },
        "modes":{
          "grab":{
            "distance":400,
            "line_linked":{
              "opacity":1
            }
          },
          "bubble":{
            "distance":400,
            "size":40,
            "duration":2,
            "opacity":8,
            "speed":3
          },
          "repulse":{
            "distance":200,
            "duration":0.4
          },
          "push":{
            "particles_nb":4
          },
          "remove":{
            "particles_nb":2
          }
        }
      },
      "retina_detect":true
    });
    var count_particles,
        stats,
        update;
        
        stats = new Stats;
        stats.setMode(0);
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.left = '0px';
        stats.domElement.style.top = '0px';
        document.body.appendChild(stats.domElement);
        count_particles = document.querySelector('.js-count-particles');
        update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); };
        requestAnimationFrame(update);

}

per();
/*
particlesJS('js-sec4',{
  "particles":{
 
//--シェイプの設定----------
      "number":{
        "value":15, //シェイプの数
        "density":{
          "enable":true, //シェイプの密集度を変更するか否か
          "value_area":1600 //シェイプの密集度
        }
      },
      "shape":{
        "type":"circle", //シェイプの形（circle:丸、edge:四角、triangle:三角、polygon:多角形、star:星型、image:画像）
        "stroke":{
          "width":0, //シェイプの外線の太さ
          "color":"#ffcc00" //シェイプの外線の色
        },
      },
      "color":{
        "value":"#00a0ff" //シェイプの色
      },
      "opacity":{
        "value":0.6, //シェイプの透明度
        "random":true, //シェイプの透明度をランダムにするか否か
        "anim":{
          "enable":false, //シェイプの透明度をアニメーションさせるか否か
          "speed":1, //アニメーションのスピード
          "opacity_min":0.1, //透明度の最小値
          "sync":false //全てのシェイプを同時にアニメーションさせるか否か
        }
      },
      "size":{
        "value":12, //シェイプの大きさ
        "random":true, //シェイプの大きさをランダムにするか否か
        "anim":{
          "enable":true, //シェイプの大きさをアニメーションさせるか否か
          "speed":10, //アニメーションのスピード
          "size_min":5, //大きさの最小値
          "sync":false //全てのシェイプを同時にアニメーションさせるか否か
        }
      },
//--------------------

//--線の設定----------
      "line_linked":{
        "enable":false, //線を表示するか否か
      },
//--------------------

//--動きの設定----------
      "move":{
        "speed":2, //シェイプの動くスピード
        "straight":false, //個々のシェイプの動きを止めるか否か
        "direction":"top-right", //エリア全体の動き(none、top、top-right、right、bottom-right、bottom、bottom-left、left、top-leftより選択)
        "out_mode":"out" //エリア外に出たシェイプの動き(out、bounceより選択)
      }
//--------------------

    },

    "interactivity":{
      "detect_on":"canvas",
      "events":{

//--マウスオーバー時の処理----------
        "onhover":{
          "enable":false, //マウスオーバーが有効か否か
          "mode":"repulse" //マウスオーバー時に発動する動き(下記modes内のgrab、repulse、bubbleより選択)
        },
//--------------------

//--クリック時の処理----------
        "onclick":{
          "enable":true, //クリックが有効か否か
          "mode":"push" //クリック時に発動する動き(下記modes内のgrab、repulse、bubble、push、removeより選択)
        },
//--------------------

      },
 
      "modes":{

//--カーソルとシェイプの間に線が表示される----------
        "grab":{
          "distance":400, //カーソルからの反応距離
          "line_linked":{
            "opacity":1 //線の透明度
          }
        },
//--------------------

//--シェイプがカーソルから逃げる----------
        "repulse":{
          "distance":100 //カーソルからの反応距離
        },
//--------------------

//--シェイプが膨らむ----------
        "bubble":{
          "distance":400, //カーソルからの反応距離
          "size":40, //シェイプの膨らむ大きさ
          "opacity":8, //膨らむシェイプの透明度
          "duration":2, //膨らむシェイプの持続時間(onclick時のみ)
          "speed":3 //膨らむシェイプの速度(onclick時のみ)
        },
//--------------------

//--シェイプが増える----------
        "push":{
          "particles_nb":4 //増えるシェイプの数
        },
//--------------------

//--シェイプが減る----------
        "remove":{
          "particles_nb":2 //減るシェイプの数
        }
//--------------------

      }
    },
    "retina_detect":true, //Retina Displayを対応するか否か
    "resize":true //canvasのサイズ変更にわせて拡大縮小するか否か
  }
);
*/