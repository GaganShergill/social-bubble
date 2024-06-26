import React from 'react';
import './BubbleButton.css';
import {NavLink} from 'react-router-dom';
import $ from 'jquery';
import {gsap, TimelineLite, Elastic} from 'gsap';
import {SlowMo} from 'gsap/EasePack';
gsap.registerPlugin(SlowMo);

class BubbleButton extends React.Component {
    componentDidMount() {
    $('.button--bubble').each(function() {
      var $circlesTopLeft = $(this).parent().find('.circle.top-left');
      var $circlesBottomRight = $(this).parent().find('.circle.bottom-right');
      var tl = new TimelineLite();
      var tl2 = new TimelineLite();

      var btTl = new TimelineLite({ paused: true });

      tl.to($circlesTopLeft, 1.2, { x: -25, y: -25, scaleY: 2, ease: SlowMo.ease.config(0.1, 0.7, false) });
      tl.to($circlesTopLeft.eq(0), 0.1, { scale: 0.2, x: '+=6', y: '-=2' });
      tl.to($circlesTopLeft.eq(1), 0.1, { scaleX: 1, scaleY: 0.8, x: '-=10', y: '-=7' }, '-=0.1');
      tl.to($circlesTopLeft.eq(2), 0.1, { scale: 0.2, x: '-=15', y: '+=6' }, '-=0.1');
      tl.to($circlesTopLeft.eq(0), 1, { scale: 0, x: '-=5', y: '-=15', opacity: 0 });
      tl.to($circlesTopLeft.eq(1), 1, { scaleX: 0.4, scaleY: 0.4, x: '-=10', y: '-=10', opacity: 0 }, '-=1');
      tl.to($circlesTopLeft.eq(2), 1, { scale: 0, x: '-=15', y: '+=5', opacity: 0 }, '-=1');

      var tlBt1 = new TimelineLite();
      var tlBt2 = new TimelineLite();

      tlBt1.set($circlesTopLeft, { x: 0, y: 0, rotation: -45 });
      tlBt1.add(tl);

      tl2.set($circlesBottomRight, { x: 0, y: 0 });
      tl2.to($circlesBottomRight, 1.1, { x: 30, y: 30, ease: SlowMo.ease.config(0.1, 0.7, false) });
      tl2.to($circlesBottomRight.eq(0), 0.1, { scale: 0.2, x: '-=6', y: '+=3' });
      tl2.to($circlesBottomRight.eq(1), 0.1, { scale: 0.8, x: '+=7', y: '+=3' }, '-=0.1');
      tl2.to($circlesBottomRight.eq(2), 0.1, { scale: 0.2, x: '+=15', y: '-=6' }, '-=0.2');
      tl2.to($circlesBottomRight.eq(0), 1, { scale: 0, x: '+=5', y: '+=15', opacity: 0 });
      tl2.to($circlesBottomRight.eq(1), 1, { scale: 0.4, x: '+=7', y: '+=7', opacity: 0 }, '-=1');
      tl2.to($circlesBottomRight.eq(2), 1, { scale: 0, x: '+=15', y: '-=5', opacity: 0 }, '-=1');

      tlBt2.set($circlesBottomRight, { x: 0, y: 0, rotation: 45 });
      tlBt2.add(tl2);

      btTl.add(tlBt1);
      btTl.to($(this).parent().find('.button.effect-button'), 0.8, { scaleY: 1.1 }, 0.1);
      btTl.add(tlBt2, 0.2);
      btTl.to($(this).parent().find('.button.effect-button'), 1.8, { scale: 1, ease: Elastic.easeOut.config(1.2, 0.4) }, 1.2);

      btTl.timeScale(2.6);

      $(this).on('mouseover', function() {
        btTl.restart();
      });
    });
  }

  shouldComponentUpdate(props, nextProps) {
    return false;
  }

  render() {
    return(
      <NavLink className={this.props.className+" bubble-button"} to={{
        pathname: this.props.to,
        state: {name: this.props.text}
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="goo">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
            <feComposite in="SourceGraphic" in2="goo"/>
          </filter>
        </defs>
      </svg>

      <span className="button--bubble__container">
        <div className="button button--bubble">
          {this.props.text}
        </div>
        <span className="button--bubble__effect-container">
          <span className="circle top-left"></span>
          <span className="circle top-left"></span>
          <span className="circle top-left"></span>

          <span className="button effect-button"></span>

          <span className="circle bottom-right"></span>
          <span className="circle bottom-right"></span>
          <span className="circle bottom-right"></span>
        </span>
      </span>
    </NavLink>
  )
  }
};


export default BubbleButton;
