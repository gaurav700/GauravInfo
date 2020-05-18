const spans = document.querySelectorAll('h1 span')
spans.forEach(span => span.addEventListener('mouseover',function(e){
    span.classList.add('animated','rubberBand')
}))
spans.forEach(span => span.addEventListener('mouseout',function(e){
    span.classList.remove('animated','rubberBand')
}))
const htmlbar=document.querySelector('.bar-html')
const cssbar=document.querySelector('.bar-css')
const jsbar=document.querySelector('.bar-javascript')
const pythonbar=document.querySelector('.bar-python')
const javabar=document.querySelector('.bar-java')
const phpbar=document.querySelector('.bar-php')
const cbar=document.querySelector('.bar-c')
const cplusplusbar=document.querySelector('.bar-cplusplus')

var t1= new TimelineLite()

t1.fromTo(htmlbar, .75, {width:'calc(0% - 6px)'},{width:'calc(90% - 6px)',ease:Power4.easeout})
    .fromTo(cssbar, .75, {width:'calc(0% - 6px)'},{width:'calc(95% - 6px)',ease:Power4.easeout})
    .fromTo(jsbar, .75, {width:'calc(0% - 6px)'},{width:'calc(70% - 6px)',ease:Power4.easeout})
    .fromTo(pythonbar, .75, {width:'calc(0% - 6px)'},{width:'calc(90% - 6px)',ease:Power4.easeout})
    .fromTo(javabar, .75, {width:'calc(0% - 6px)'},{width:'calc(95% - 6px)',ease:Power4.easeout})
    .fromTo(phpbar, .75, {width:'calc(0% - 6px)'},{width:'calc(87% - 6px)',ease:Power4.easeout})
    .fromTo(cbar, .75, {width:'calc(0% - 6px)'},{width:'calc(80% - 6px)',ease:Power4.easeout})
    .fromTo(cplusplusbar, .75, {width:'calc(0% - 6px)'},{width:'calc(95% - 6px)',ease:Power4.easeout})
   
const controller = new ScrollMagic.controller()
const scene= new ScrollMagic.Scene({
       triggerElement:'.skills',
       triggerHook:0
})
.setTween(t1)
.addTo(controller)

