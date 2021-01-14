import React from 'react';
import ArrowDown from './ArrowDown';
import $ from 'jquery';


class Footer extends React.Component {
  constructor(props) {
    super (props);
    this.contentRef = React.createRef();
    this.componentRef = React.createRef();
    this.state = {isStopped: true};
    this.toggle = this.toggle.bind(this);
    this.fadeInText = this.fadeInText.bind(this);
  }

  componentDidMount() {
    this.fadeOutBody();
    this.fadeInText();
    setInterval(this.fadeInText, 15000);
  }

  fadeInText() {
    var $el = $(this.contentRef.current), text = $.trim($el.text()), html = "";
    var initialElem = $el.html();
    for (var i = 0; i < text.length; i++) {
      if (i < 12 && i > 6) {
        if (text[i] !== " ") {
          html += "<span class='logo-word'>" + text[i] + "</span>";
        } else {
          i += 1;
          html += "<span class='logo-word'> " + text[i] + "</span>";
        }
      } else {
        if (text[i] !== " ") {
          html += "<span>" + text[i] + "</span>";
        } else {
          i += 1;
          html += "<span> " + text[i] + "</span>";
        }
      }
    };

    $el.html(html).children().each(function(i){
      $(this).animate({opacity: '0'}, 1000, function () {
        $(this).delay(i*200).animate({opacity: '100%'}, 1000)
      })
    });

    $el.children().promise().done(function(){
      $el.html(initialElem);
    });
  }

  fadeOutBody() {
    let $footer = $(this.componentRef.current)
    $footer.hover(function () {
      $('#root > :not(.page-transition):not(.intro-block)').addClass('opaque transition')
      $('.intro-text-content').addClass('opaque transition')
      $('#friends-group-img').addClass('opaque transition')
    }, function () {
      $('#root > :not(.page-transition):not(.intro-block)').removeClass('opaque')
      $('.intro-text-content').removeClass('opaque')
      $('#friends-group-img').removeClass('opaque')

      setTimeout(function () {
        $('#root > :not(.page-transition):not(.intro-block)').removeClass('transition')
        $('.intro-text-content').removeClass('transition')
        $('#friends-group-img').removeClass('transition')
      }, 300);
    })
  }

  toggle() {
    const currentState = this.state.isStopped;
    this.setState({isStopped: !currentState});
  }

  render() {
    return (
      <div className='footer' ref={this.componentRef} onMouseEnter={this.toggle} onMouseLeave={this.toggle} onClick={this.props.handleClick}>
        <ArrowDown className="arrow left-side" isStopped={this.state.isStopped}/>
        <h1 ref={this.contentRef}>
          What is <span className='logo-word'>ZONE</span> ?
        </h1>
        <ArrowDown className="arrow right-side" isStopped={this.state.isStopped} />
      </div>
    )
  }
}

export default Footer;
