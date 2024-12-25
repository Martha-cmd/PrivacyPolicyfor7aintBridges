import React from "react";

const Policy = () => {
  return (
    <div className="w-full flex flex-col items-start md:p-8 px-5 py-8  bg-gray-50 text-gray-800 font-sans">
      <div className="w-full">
        <h1 className="text-center text-3xl font-bold mb-6">
          Privacy Policy for 7aint Bridges Admin App
        </h1>
      </div>

      <p className="mb-4">
        <strong>Effective Date:</strong> 26/12/2024
      </p>
      <p className="mb-6">
        <strong>Last Updated:</strong> 20/12/2024
      </p>

      <p className="mb-6 text-start">
        At 7aint Bridges, we value the privacy of our users and are committed to
        protecting the information collected through the{" "}
        <strong>7aint Bridges Admin App</strong> ("the App"). This privacy
        policy explains how data is collected, used, and safeguarded when
        administrators use the App to manage the e-commerce platform
        <a
          href="https://7aintbridges.online"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          {" "}
          7aint Bridges
        </a>
        .
      </p>

      <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
      <p className="mb-4">
        The App is designed exclusively for administrative use by authorized
        personnel of 7aint Bridges. The types of data we collect include:
      </p>
      <ul className="list-disc list-inside mb-6 flex flex-col items-start">
        <li className="mb-2 flex flex-col items-start">
          <strong>Personal Information</strong>
          <ul className="list-disc list-inside flex flex-col items-start">
            <li>
              Administrator Account Details: Name, email address, and login
              credentials.
            </li>
            <li>
              Authentication Information: Data required for secure access to the
              app (e.g., unique identifiers, tokens).
            </li>
          </ul>
        </li>
        <li className="mb-2 flex flex-col items-start">
          <strong>Operational Data</strong>
          <ul className="list-disc list-inside flex flex-col items-start">
            <li>Product details (e.g., metadata, descriptions, pricing).</li>
            <li>Shipping information and order data.</li>
            <li>Website content (e.g., product images, categories).</li>
          </ul>
        </li>
        <li className="flex flex-col items-start">
          <strong>Automatically Collected Data</strong>
          <ul className="list-disc list-inside flex flex-col items-start">
            <li>
              Device information (e.g., device model, operating system, app
              version).
            </li>
            <li>
              Usage logs (e.g., timestamps, actions performed within the app).
            </li>
            <li>
              IP addresses used for security monitoring and troubleshooting.
            </li>
          </ul>
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">
        2. How We Use the Information
      </h2>
      <p className="mb-4">
        The data collected is used solely to manage the e-commerce platform and
        improve app functionality. Specifically, we use the information to:
      </p>
      <ul className="list-disc list-inside mb-6 flex flex-col items-start">
        <li>Upload and edit product details on the 7aint Bridges website.</li>
        <li>Process and update shipping and order information.</li>
        <li>Monitor website performance and content accuracy.</li>
        <li>Provide secure access to authorized administrators.</li>
        <li>Diagnose and resolve technical issues in the App.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">
        3. Data Sharing and Disclosure
      </h2>
      <p className="mb-4">
        We do not sell or share collected data with third parties for marketing
        purposes. However, we may share data in the following situations:
      </p>
      <ul className="list-disc list-inside mb-6 flex flex-col items-start">
        <li>
          <strong>With Service Providers:</strong> To maintain and improve the
          App's functionality (e.g., cloud storage, analytics tools).
        </li>
        <li>
          <strong>For Legal Obligations:</strong> If required by law,
          regulation, or legal process.
        </li>
        <li>
          <strong>For Security Purposes:</strong> To detect, prevent, or address
          fraud, security, or technical issues.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
      <p className="mb-4">
        We implement robust security measures to protect the information stored
        and processed in the App, including:
      </p>
      <ul className="list-disc list-inside mb-6 flex flex-col items-start">
        <li>Encrypted communication channels (e.g., HTTPS, SSL).</li>
        <li>Regular updates to address vulnerabilities.</li>
        <li>Restricted access to authorized administrators only.</li>
      </ul>
      <p className="mb-6 text-start">
        While we strive to safeguard all data, no system is 100% secure. We
        recommend administrators use strong, unique passwords and ensure their
        devices are secure.
      </p>

      <h2 className="text-2xl font-semibold mb-4">5. Data Retention</h2>
      <p className="mb-6 text-start">
        We retain data only for as long as necessary to fulfill its purpose or
        as required by law. Data related to administrative actions may be stored
        for auditing and troubleshooting purposes.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        6. Administrator Responsibilities
      </h2>
      <p className="mb-4">
        As an administrator of 7aint Bridges, you are responsible for:
      </p>
      <ul className="list-disc list-inside mb-6 flex flex-col items-start">
        <li>Keeping your login credentials confidential.</li>
        <li>Using the App only for its intended purpose.</li>
        <li>Reporting any security concerns or breaches to us immediately.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">7. Your Rights</h2>
      <p className="mb-4">
        As an authorized user, you have the following rights:
      </p>
      <ul className="list-disc list-inside mb-6 flex flex-col items-start">
        <li>
          <strong>Access:</strong> Request access to the information associated
          with your account.
        </li>
        <li>
          <strong>Update or Delete:</strong> Request corrections or deletions of
          your personal data, where applicable.
        </li>
        <li>
          <strong>Restrict Use:</strong> Restrict certain data processing
          activities, subject to operational needs.
        </li>
      </ul>
      <p className="mb-6">
        To exercise these rights, contact us at the details below.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        8. Third-Party Links and Services
      </h2>
      <p className="mb-6 text-start">
        The App may integrate with third-party services (e.g., cloud storage or
        analytics). These services have their own privacy policies, which we
        recommend reviewing. We are not responsible for the privacy practices of
        third-party providers.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        9. Changes to This Privacy Policy
      </h2>
      <p className="mb-6 text-start">
        We may update this privacy policy from time to time to reflect changes
        in the App or legal requirements. Any updates will be communicated
        through the App, and the updated policy will include a new "Last
        Updated" date.
      </p>

      <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
      <p className="mb-4 text-start">
        If you have any questions or concerns about this Privacy Policy or how
        your information is used, please contact us at:
      </p>
      <p className="mb-4 text-start">
        <strong>7aint Bridges</strong>
        <br />
        Email:{" "}
        <a
          href="mailto:admin@7aintbridges.online"
          className="text-blue-500 hover:underline"
        >
          admin@7aintbridges.online
        </a>
        <br />
        Website:{" "}
        <a
          href="https://7aintbridges.online"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          https://7aintbridges.online
        </a>
      </p>
    </div>
  );
};

export default Policy;
