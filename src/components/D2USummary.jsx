import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class D2USummary extends Component {
  render() {
    return (
      <div className='row'>
        <div className="col-sm-12">
          <img 
            src="" 
            alt="D2U Letterhead"
          />
          <p>From the Desk of the President:</p>

          <p>
            In matters of firm management, D2 stands more or less on 
            the constitution of Jim Cramer’s How Firms Succeed – an 
            industry staple since 2004.  Jim is a friend and has 
            successfully drilled into my mind, by oration as well as 
            written word, that the best architectural firms in the 
            country run on four pistons:
          </p>

          <ul>
            <li><em>Marketing</em></li>
            <li><em>Operations</em></li>
            <li><em>Professional Services (i.e. Architecture)</em></li>
            <li><em>Finances</em></li>
          </ul>

          <p>
            At the beginning of 2014, we realized that we were staring at a 
            business landscape hitherto untraveled.  We were enjoying the 
            unprecedented luxury of having enough solid work, enough backlog, 
            to see us through the year and even deep into the next.  Marketing 
            would be – it appeared – essentially superfluous for a while.  
            We even (gulp) started turning projects down; good projects for good 
            clients!  With cautious optimism we pruned the marketing budget for 
            2014 and reallocated the displaced time and financial resources 
            into… Operations, Architecture, and Finances.  2014 would be D2’s 
            year “Under the Hood.”  A year to get better, great in fact, in 
            everything we do.
          </p>

          <p>
            During a day-long, full staff retreat early in the year, we ran 
            competency assessments of each staff member (one self-assessment 
            combined with the opinions of two informed peers) to see where they 
            ranked on the basis of CONTENT and MEDIA.  Triangulating these 
            assessments case-by-case, everyone landed somewhere on an X-Y axis, 
            Content was X, Media was Y.  The goal is to move every “dot” on the 
            firm-wide chart upward and to the right over the course of the next 
            twelve months.
          </p>

          <img 
            src="" 
            alt="Growth Chart"
          />

          <p>
            CONTENT was defined as how well you know your stuff – building 
            codes, flashing details, design specifics for the elderly, 
            coordination with outside consultants, the contractor’s General 
            Conditions, cost control (construction and our own), and so on.
          </p>

          <p>
            MEDIA was how competent you are with your tools – primarily our 
            CAD software (Revit), Sketchup, Photoshop, Excel, Word, even hand 
            drawing, and if you could write a good email.
          </p>

          <p>
            Predictably some were better (okay, much better) than others at 
            Content, while others were much better in Media.  Thus the “faculty” 
            of D2U was formed – the High Content staff would teach the Low Content 
            staff in a systematized manner, and the High Media staff would teach 
            the Low Media staff.  It was a kind of symmetrical belaying setup.  
            By sheer relatively, everyone had something to offer their brother 
            or sister down the chart in one category or the other.
          </p>

          <p>
            In February, D2U held its first of fifty-two classes!  And the 
            classes have progressed without exception every Tuesday from 12:00 
            to 2:00.  It may be the free pizza, but attendance has been 
            virtually 100% – all staff in all sessions.  It has been a raging 
            success!  The plan is to continue the curriculum for a full year, 
            getting more advanced in both Content and Media as the year 
            progresses.  The syllabus is occasionally punctuated with outside 
            “lecturers” and panelists to bring in specific expertise.  This 
            includes contractors, engineers, code consultants, owner/clients, 
            and others who have much to offer to a growing student body of 
            inquiring minds.
          </p>

          <p>
            Our classes began with a memorable quote by Dorothy Parker: 
            <em> “The cure for boredom is curiosity.  There is no cure for curiosity.” </em>  
            That more or less says it all.
          </p>

          <p>Rah, rah, D2U!</p>

          <img 
            src="" 
            alt="David Dillard Signature TODO:(small)"
          />
          <div className="center-text dillard-sig">
            <Link to='/d2u'>Return to D2U Main</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default D2USummary;