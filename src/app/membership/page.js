import "./membership.css";
import Image from "next/image";

export default function Membership() {
  return (
    <>
      <div className="membership-hero-section">
        <h2 className="membership-hero-heading">Membership</h2>
      </div>
      <div className="membership-content-continer">
        <div className="membership-content">
          <article className="section-content">
            <p className="membership-page-content-text">
              Membership at BiellaVita is an invitation-only privilege, with two
              categories: Active and Non-Active members.
            </p>
            <div className="card-container">
              <div className="subscription-card-one">
                <div className="card-banner"></div>
                <div className="card-content-container">
                  <h2 className="card-heading">Active Membership</h2>
                  <p className="card-para-one">
                    The active members of BiellaVita will have the opportunity
                    to propose and contribute to a variety of projects. These
                    projects may be in the field of education, culture, art,
                    fashion, food and other topics in relation with the
                    lifestyle and BiellaVita values. Active members can play a
                    hands-on role in the execution of these projects, leveraging
                    their own contacts and relationships to support the work of
                    BiellaVita.
                  </p>
                  <p className="card-para-two">
                    This active membership is ideal for individuals who wish to
                    take a proactive role within the organization and contribute
                    directly to its initiatives and activities.
                  </p>
                  <div className="card-button-container">
                    <button className="card-button">Apply now</button>
                  </div>
                </div>
              </div>

              <div className="subscription-card-one">
                <div className="card-banner"></div>
                <div className="card-content-container">
                  <h2 className="card-heading">Non-Active Membership</h2>
                  <p className="card-para-one">
                    The active members of BiellaVita will have the opportunity
                    to propose and contribute to a variety of projects. These
                    projects may be in the field of education, culture, art,
                    fashion, food and other topics in relation with the
                    lifestyle and BiellaVita values. Active members can play a
                    hands-on role in the execution of these projects, leveraging
                    their own contacts and relationships to support the work of
                    BiellaVita.
                  </p>
                  <p className="card-para-two">
                    This active membership is ideal for individuals who wish to
                    take a proactive role within the organization and contribute
                    directly to its initiatives and activities.
                  </p>
                  <div className="card-button-container">
                    <button className="card-button">Apply now</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="process-container">
              <div className="process-main-heading-container">
                <h2 className="process-main-heading">Membership Process</h2>
              </div>

              <div className="process-row">
                <div className="process-one-container bottomspacing">
                  <div className="process-number-pic">
                    <Image
                      src="/process-label-one.png" // The path relative to the "public" folder
                      alt="My Awesome Image"
                      width={95} // Width of the image
                      height={95} // Height of the image
                    />
                  </div>
                  <h2 className="process-heading">Receive a Warm Invitation</h2>
                  <p className="process-description">
                    Our club thrives on connections! You’ll need an invitation
                    from a current member who believes you would be a great fit
                    for our community.
                  </p>
                </div>
                <div className="process-one-container topspacing">
                  <div className="process-number-pic">
                    <Image
                      src="/process-label-two.png" // The path relative to the "public" folder
                      alt="My Awesome Image"
                      width={95} // Width of the image
                      height={95} // Height of the image
                    />
                  </div>
                  <h2 className="process-heading">
                    Fill Out Your Membership Application
                  </h2>
                  <p className="process-description">
                    Once you have your invitation, we invite you to complete a
                    simple membership application. Share a bit about yourself,
                    your interests, and what draws you to our club.
                  </p>
                </div>
              </div>

              <div className="process-row">
                <div className="process-one-container bottomspacing">
                  <div className="process-number-pic">
                    <Image
                      src="/process-label-three.png" // The path relative to the "public" folder
                      alt="My Awesome Image"
                      width={95} // Width of the image
                      height={95} // Height of the image
                    />
                  </div>
                  <h2 className="process-heading">
                    Join Us for a Welcome Meeting
                  </h2>
                  <p className="process-description">
                    After reviewing your application, we’ll invite you to a
                    casual welcome meeting with some of our members. This is a
                    fantastic opportunity to get to know our club and share your
                    passions.
                  </p>
                </div>
                <div className="process-one-container topspacing">
                  <div className="process-number-pic">
                    <Image
                      src="/process-label-four.png" // The path relative to the "public" folder
                      alt="My Awesome Image"
                      width={95} // Width of the image
                      height={95} // Height of the image
                    />
                  </div>
                  <h2 className="process-heading">Celebrate Your Membership</h2>
                  <p className="process-description">
                    If all goes well, we would be delighted to officially
                    welcome you as a member! You’ll be invited to a special
                    induction ceremony where we celebrate new members and their
                    unique contributions to our community.
                  </p>
                </div>
              </div>
            </div>

            <div className="benefits-container">
              <div className="benefits-heading-continer">
                <h2 className="benefits-heading">Benefits</h2>
              </div>

              <div className="the-cards-collection">
                <div className="benefits-card-container">
                  <div className="benefits-card">
                    <h2 className="benefits-card-heading">Active Membership</h2>
                    <p className="benefits-card-description">
                      Choosing to be an active member will mean wanting to play
                      a crucial role in the development and support of
                      BiellaVita’s vision and will come with some additional
                      benefits
                    </p>
                    <ul className="benefits-list">
                      <li className="benefits-list-item">
                        <div className="bullet-container">
                          {" "}
                          <Image
                            src="/listbullet.png" // The path relative to the "public" folder
                            alt="My Awesome Image"
                            width={25} // Width of the image
                            height={25} // Height of the image
                          />
                        </div>

                        <div className="list-item-desc spacinglight">
                          Propose new projects allowing them to influence
                          initiatives that align with their interests and
                          expertise in respect of the core values.
                        </div>
                      </li>

                      <li className="benefits-list-item">
                        <div className="bullet-container">
                          {" "}
                          <Image
                            src="/listbullet.png" // The path relative to the "public" folder
                            alt="My Awesome Image"
                            width={25} // Width of the image
                            height={25} // Height of the image
                          />
                        </div>

                        <div className="list-item-desc spacingrightcard">
                          Have the opportunity to organise specific thematic
                          events.
                        </div>
                      </li>

                      <li className="benefits-list-item">
                        <div className="bullet-container">
                          {" "}
                          <Image
                            src="/listbullet.png" // The path relative to the "public" folder
                            alt="My Awesome Image"
                            width={25} // Width of the image
                            height={25} // Height of the image
                          />
                        </div>

                        <div className="list-item-desc spacingrightcard">
                          Introduce potential new partnerships in a wide
                          spectrum of fields.
                        </div>
                      </li>

                      <li className="benefits-list-item">
                        <div className="bullet-container">
                          {" "}
                          <Image
                            src="/listbullet.png" // The path relative to the "public" folder
                            alt="My Awesome Image"
                            width={25} // Width of the image
                            height={25} // Height of the image
                          />
                        </div>

                        <div className="list-item-desc spacinglight">
                          Active members have the opportunity to contribute to a
                          lasting legacy within BiellaVita, helping shape its
                          future direction. 
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="benefits-card-container">
                  <div className="benefits-card">
                    <h2 className="benefits-card-heading">
                      Non-Active Membership
                    </h2>
                    <p className="benefits-card-description">
                      Choosing to be a non-active member will represent
                      expressing the CHOICE to adhere to a specific lifestyle
                      that is based around the core values of BiellaVita, it’s a
                      statement.
                    </p>
                    <ul className="benefits-list">
                      <li className="benefits-list-item">
                        <div className="bullet-container">
                          {" "}
                          <Image
                            src="/listbullet.png" // The path relative to the "public" folder
                            alt="My Awesome Image"
                            width={25} // Width of the image
                            height={25} // Height of the image
                          />
                        </div>

                        <div className="list-item-desc spacingrightcard">
                          Invitation to the club events
                        </div>
                      </li>

                      <li className="benefits-list-item">
                        <div className="bullet-container">
                          {" "}
                          <Image
                            src="/listbullet.png" // The path relative to the "public" folder
                            alt="My Awesome Image"
                            width={25} // Width of the image
                            height={25} // Height of the image
                          />
                        </div>

                        <div className="list-item-desc spacingrightcard">
                          Access to our partnership’s facilities, products, and
                          services
                        </div>
                      </li>

                      <li className="benefits-list-item">
                        <div className="bullet-container">
                          {" "}
                          <Image
                            src="/listbullet.png" // The path relative to the "public" folder
                            alt="My Awesome Image"
                            width={25} // Width of the image
                            height={25} // Height of the image
                          />
                        </div>

                        <div className="list-item-desc spacingrightcard">
                          Being amongst like-minded people
                        </div>
                      </li>

                      <li className="benefits-list-item">
                        <div className="bullet-container">
                          {" "}
                          <Image
                            src="/listbullet.png" // The path relative to the "public" folder
                            alt="My Awesome Image"
                            width={25} // Width of the image
                            height={25} // Height of the image
                          />
                        </div>

                        <div className="list-item-desc spacingrightcard">
                          First access to the club products and merchandise.
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
