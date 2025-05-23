
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicyPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-6 md:p-12 max-w-4xl mx-auto">
        <div className="prose prose-slate max-w-none">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Usage Details, IP Addresses, Cookies, and Other Technologies</h2>
          
          <p className="mb-4">
            As you navigate through and interact with our Website and Application, we may automatically collect certain information about your equipment, browsing actions and patterns, including
          </p>
          
          <ol className="list-roman mb-6 pl-6">
            <li className="mb-2">Details of your visits to our Website and Application, including traffic data, location data, logs and other communication data and the resources that you access and use on the Website and Application,</li>
            <li className="mb-2">Information about your computer and internet connection, including your IP address, operating system and browser type.</li>
          </ol>
          
          <p className="mb-4">
            The information we collect automatically is statistical data, and does not identify any individual. It helps us to improve our Website and Application and to deliver a better and more personalized service by enabling us to
          </p>
          
          <ol className="list-roman mb-6 pl-6">
            <li className="mb-2">Estimate our audience size and usage patterns,</li>
            <li className="mb-2">Store information about your preferences, allowing us to customize our Website and Application according to your individual interests,</li>
            <li className="mb-2">Speed up your searches,</li>
            <li className="mb-2">Recognize you when you return to our Website and Application.</li>
          </ol>
          
          <p className="mb-4">
            We do not collect personal Information automatically, but we may tie this information to personal information about you that we collect from other sources or you provide to us.
          </p>
          
          <p className="mb-4">
            The technologies we use for this automatic data collection may include,
          </p>
          
          <ol className="list-roman mb-6 pl-6">
            <li className="mb-4">
              <strong>Cookies (or browser cookies).</strong> A cookie is a small file placed on the hard drive of your computer. You may refuse to accept browser cookies by activating the appropriate setting on your browser. However, if you select this setting you may be unable to access certain parts of our Website or Application. Unless you have adjusted your browser setting so that it will refuse cookies, our system will issue cookies when you direct your browser to our Website or Application,
            </li>
            <li className="mb-4">
              <strong>Flash Cookies.</strong> Certain features of our Website may use local stored objects (or Flash cookies) to collect and store information about your preferences and navigation to, from and on our Website. Flash cookies are not managed by the same browser settings as are used for browser cookies,
            </li>
            <li className="mb-4">
              <strong>Web Beacons.</strong> Pages of our the Website, our Application, and our e-mails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an e-mail and for other related website statistics (for example, recording the popularity of certain website content and verifying system and server integrity).
            </li>
          </ol>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Analytics</h2>
          
          <p className="mb-4">
            We use <a href="https://analytics.google.com" className="text-blue-600 underline hover:text-blue-800" target="_blank" rel="noopener noreferrer">Google Analytics</a> to help analyze how users use the Website and Application. Google Analytics uses Cookies to collect information such as how often users visit the Website, what pages they visit, and what other sites they used prior to coming to the Website. We use the information we get from Google Analytics only to improve our Website, Application, and Services. Google Analytics collects only the IP address assigned to you on the date you visit the Website or Application, rather than your name or other personally identifying information. We do not combine the information generated through the use of Google Analytics with your Personal Data. Although Google Analytics plants a persistent Cookie on your web browser to identify you as a unique user the next time you visit the Site, the Cookie cannot be used by anyone but Google. Google's ability to use and share information collected by Google Analytics about your visits to the Site is restricted by the <a href="https://marketingplatform.google.com/about/analytics/terms/" className="text-blue-600 underline hover:text-blue-800" target="_blank" rel="noopener noreferrer">Google Analytics Terms of Use</a> and the <a href="https://policies.google.com/privacy" className="text-blue-600 underline hover:text-blue-800" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Mobile Device Information</h2>
          
          <p className="mb-4">
            When you access our Service by or through a mobile device, we may receive or collect and store a unique identification numbers associated with your device (Device ID) mobile carrier, device type and manufacturer, phone number, and, depending on your mobile device settings, your geographical location data, including GPS coordinates (e.g. latitude and/or longitude) or similar information regarding the location of your mobile device.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">SMS Text Messaging</h2>
          
          <p className="mb-4">
            We will not share your opt-in to an SMS campaign with any third party for purposes unrelated to providing you with the services of that campaign. We may share your Personal Data, including your SMS opt-in or consent status, with third parties that help us provide our messaging services, including but not limited to platform providers, phone companies, and any other vendors who assist us in the delivery of text messages. All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
