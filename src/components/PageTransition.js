import React from 'react';
import Footer from './Footer';
import $ from 'jquery';
import './PageTransition.css'
import ArrowDown from './ArrowDown'
import {gsap} from 'gsap';

class PageTransition extends React.Component {
  constructor(props) {
    super (props);
    this.componentRef = React.createRef()
    this.handleClick = this.handleClick.bind(this);
    this.state = {isStopped: true};
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    this.fadeOutBody();
  }

  fadeOutBody() {
    $('.arrow.center').hover(function () {
      $('.about-page-two').addClass('opaque transition');
    }, function() {
      $('.about-page-two').removeClass('opaque transition');
    });
  }

  handleClick() {
    if (this.props.isPageOne) {
      this.showPageTwo()
    } else {
      this.showPageOne()
    }
  }

  showPageTwo() {

    //Fade out the body
    let pageTransition = $(this.componentRef.current)
    let $footer = $(pageTransition.children()[0])

    pageTransition.removeClass('no-jQuery');
    pageTransition.css('transition', 'none');

    $('.about-page-one').addClass('fade-out');
    $footer.addClass('fade-out').removeClass('fade-in').addClass('fade-out');
    $footer.css('pointer-events', 'none');

    //gsap animation for PageTransition component
    let  $windowWidth = $(window).width(),$windowHeight = $(window).height();
    let  $navHeight = $('nav').height(), $pageTransitionHeight = $windowHeight- $navHeight;
    let tl = gsap.timeline();
    if ($windowWidth < 767.98) {
      pageTransition.addClass('full-width')
    } else {
      tl.to(pageTransition, {duration: 0.4,width: '100%',right: '0',ease: 'bounce'})
    }

    if ($windowWidth < 576.98) {
      $pageTransitionHeight += 10;
    }

    tl.to(pageTransition, {height: $pageTransitionHeight, borderRadius:0,boxShadow: 'none', delay: .1})
    tl.to(pageTransition, {height: 3, bottom:$pageTransitionHeight-3, delay: .2})

    //set parent page 1 to false, so that page 2 can render
    let classThis = this
    setTimeout(function () {
      classThis.props.togglePage()
    }, 1000)
  }

  showPageOne() {
    let $pageTransition = $(this.componentRef.current)
    let pageTransition = this.componentRef.current;

    let $footer = $($pageTransition.children()[0])

    let  $windowHeight = $(window).height();
    let  $pageTransitionHeight = $windowHeight - pageTransition.getBoundingClientRect().top;

    $('.about-page-two').addClass('fade-out');
    //gsap animation for PageTransition component
    let tl = gsap.timeline();
    tl.to($pageTransition, {height: $pageTransitionHeight, bottom:0, delay: .2})
    tl.to($pageTransition, {
      height: 'calc(4rem + 2vmin)',
      borderRadius:'2em 2em 0 0',
      delay: .1})


    tl.to($pageTransition, {duration: 0.4,width: '50%',right:'5%',ease: 'bounce'})
    //set parent page 1 to false, so that page 2 can render
    let classThis = this
    setTimeout(function () {
      classThis.props.togglePage()
      $footer.removeClass('fade-out').addClass('fade-in');
    }, 400)

    //remove style from pageTransition
    setTimeout(function () {
      $footer.removeAttr("style");
      $pageTransition.removeAttr("style");
      $pageTransition.removeClass('full-width');
      $pageTransition.addClass('no-jQuery');
    }, 1800)
  }

  toggle() {
    const currentState = this.state.isStopped;
    this.setState({isStopped: !currentState});
  }

  render() {
    return (
      <div ref={this.componentRef} className={this.props.className}>
        <Footer handleClick={this.handleClick}/>
        <div onMouseEnter={this.toggle} onMouseLeave={this.toggle} onClick={this.handleClick}>
          <ArrowDown className='arrow center' isStopped={this.state.isStopped}/>
        </div>
      </div>
    )
  }
}

export default PageTransition;
