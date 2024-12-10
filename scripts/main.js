/* Sidebar start */

function openNav(){
    'use strict';
    const sidepanel = document.getElementById('mySidePanel');
    
    if (sidepanel){
        sidepanel.style.left = '0';
    } else{
        console.error('Error: sidepanel not found');
    }
}

'use strict';
const showFAQsSection = document.getElementById('showFAQsSection');
const faqsSection = document.getElementById('faqsSection');
const btnCloseFAQs = document.getElementById('btnCloseFAQs');
const showFAQsForm = document.getElementById('showFAQsForm');
const FAQsForm = document.getElementById('FAQsForm');
const submitFAQsFormButton = document.getElementById('submitFAQsFormButton');

const btnCloseLeadapture = document.getElementById('btnCloseLeadCapture');
const sectionLeadCapture = document.getElementById('leadCaptureSection');

const btnNavToVideoSection = document.getElementById('btnNavigateToVidStrategy');
const sectionMainhero = document.getElementById('heroSection');

const sectionValueVideo  = document.getElementById('valueVideoSection');

const txtOpenLeadCapture = document.getElementById('txtOpenLeadcapture');
const iconPause = document.getElementById('btnPauseIcon');

const sectionThankYouVideo = document.getElementById('thankYouVideoSection');
const btnCloseThanksPage = document.getElementById('btnCloseThanksPage');

const btnSubmitLeadCapture  = document.getElementById('btnSubmitLeadCapture');

function openThankYouPage(){
    if (sectionThankYouVideo){
        sectionLeadCapture.style.height = '0%';
        
        sectionThankYouVideo.style.display = 'flex';
    } else {
        console.error('Error: Thank You Video Section Not Found');
    }
}

// Add event listeners for responsiveness testing
window.addEventListener('resize', () => {
    const thankYouSection = document.getElementById('thankYouVideoSection');
    if (thankYouSection.style.display === 'flex') {
        thankYouSection.scrollIntoView({ behavior: 'smooth' });
    }
});

function closeThankYouPage(){
    if (sectionThankYouVideo){
        sectionThankYouVideo.style.display = 'none';
    } else {
        console.error('Error: ThankY You Video Section Not Found');
    }
}

function openFAQs(){
    'use strict';
    if (showFAQsSection){
        faqsSection.style.height = '100%'

    } else{
        console.error('Error: button not found');
    }
}

function openFAQsForm(){
    'use strict';
    const btnText = document.getElementById('showFAQsForm');
    btnText.innerHTML;
    if (showFAQsForm){
        FAQsForm.style.height = 'fit-content'
        showFAQsForm.style.height = '0px'
        showFAQsForm.style.overflow = 'hidden'
        submitFAQsFormButton.style.height = 'fit-content'

    } else{
        console.error('Error: button not found');
    }
}

function openValueVideo(){
    if (sectionValueVideo){
        sectionValueVideo.style.display = 'flex'
        sectionValueVideo.scrollIntoView( {behavior: 'smooth' });

        
        sectionMainhero.style.display = "none"
    } else {
        console.error('Error: Section Value Video not found')
    }
}

function openLeadCaptureSection(){
    if (sectionLeadCapture){
        sectionLeadCapture.style.height = '100%';
    } else {
        console.error('Error: Lead Section Not Found!');
    }
}

function submitFAQsForm(){
    'use strict';
    if (submitFAQsForm){
        FAQsForm.style.height = '0'
        showFAQsForm.style.height = 'fit-content'
        submitFAQsFormButton.style.height = '0px'

    } else{
        console.error('Error: button not found');
    }
}

function closeFAQs(){
    'use strict';
    if (btnCloseFAQs){
        faqsSection.style.height = '0'

    } else{
        console.error('Error: button not found');
    }
}

function closeNav(){
    'use strict';
    const sidepanel = document.getElementById('mySidePanel');

    if (sidepanel){
        sidepanel.style.left = '-320px';
    } else{
        console.error('Error: sidepanel not found');
    }
}

/* Search bar */
function openSearch(){
    'use strict';
    const searchPanel = document.getElementById('searchbar');
    if (searchPanel){
        searchPanel.style.height = '100vh';
        searchPanel.style.borderRadius = '0';
    } else {
        console.error('Error: search panel not found');
    }
}

function closeSearch(){
    'use strict';
    const searchPanel = document.getElementById('searchbar');
    if (searchPanel){
        searchPanel.style.height = '0';
        searchPanel.style.borderTopRightRadius = '100%';
        searchPanel.style.borderTopLeftRadius = '100%';
    } else {
        console.error('Error: search panel not found');
    }
}

function closeAppointmentView(){
    'use strict'
    const btnCloseAppointmentView = document.getElementById('btnCloseApointment');
    const appointmentView = document.getElementById('appointmentView');

    if(appointmentView){
        appointmentView.style.height = '0';
    } else {
        console.error('Error: appointmentview not found');
    }
}

function closeLeadCapture(){
    if (sectionLeadCapture){
        sectionLeadCapture.style.height = '0';
    } else {
        console.error('Error: Lead Capture Section not found');
    }
}

function navigateToNextPage() {
    alert('Redirecting to the Contact Us page...');
    // Redirect to next page
    window.location.href = '.html';
  }

  function scrollToAboutPage(){
    document.getElementById('contactDiv').scrollIntoView();
  }

  $('.video').parent().click(function () {
    if($(this).children(".video").get(0).paused){        $(this).children(".video").get(0).play();   $(this).children(".playpause").fadeOut();
      }else{       $(this).children(".video").get(0).pause();
    $(this).children(".playpause").fadeIn();
      }
  });

  