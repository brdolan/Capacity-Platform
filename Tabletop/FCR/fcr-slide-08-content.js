/* ─────────────────────────────────────────────────────────────────────────────
   Slide 8 — Scenario 2: Mitigation and Recovery (Holiday 2026).
   Content sourced from FCR_TableTop deck slides 23-30.
   ───────────────────────────────────────────────────────────────────────────── */
window.FLOW_DETAILS = {
  /* ── PHASE 1: Oct – Nov ── PROACTIVE MITIGATION ── */
  n1: {kind:'node', phase:'p1', lane:'Customer', manual:'N', title:'Approved FCR',
       body:'<p>The previously approved FCR which is now at risk of slipping its Need-by Date.</p>'},

  n2: {kind:'node', phase:'p1', lane:'Compute', manual:'N', title:'FCR slippage trigger',
       layer:'LAYER 1',
       commitmentRep:'CMAS Team',
       purpose:'<p>Traceability monitors and signals when an FCR cluster starts slipping and is likely to miss a customer due-by-date. Automation highlights risk when incoming flagged holiday clusters show delays of 2 weeks in any of their ETA Dock Date, FG Build Date, and Clear to Dock Date. An ICM will be triggered to initiate a mitigation action in OFP and/or CSCP.</p>',
       expectedInputs:'Set of defined thresholds and triggers to flag FCR in traceability. FCR reservation tags to distinguish FCR from other reservation types. These thresholds must include ETA Dock Date, FG Build Date, and Clear to Dock Date.',
       agreedUpon:[
         {done:'The trigger initiates an ICM to OFP + CSCP queue to request mitigation action. Mitigation action will involve expediting via severity change and/or priority increase via APC.',
          notDone:'System failures (technical tool issues) and customer deployment support are out of scope for this trigger.'},
         {done:'OFP + CSCP monitor/track risk via automated alert when clusters are late or delayed in execution. OFP + CSCP tracks via OCT + CCC, but that is not the primary risk detection.',
          notDone:'OFP + CSCP monitors through fulfilment trackers - OCT and CCC, the daily production meeting, ICM queue, assigned Demand Guardian.'},
         {done:'Incoming holiday capacity to be tracked at increased priority after reservation success, not dependent on delay in capacity.',
          notDone:'&nbsp;'}
       ],
       stillNeedsAlignment:'Traceability signals need to be finalized and ICM triggers put in place (Patrick to provide guidelines on when ICM needs to be triggered)<br><br>FCR reservation tagging: how FCR reservations will be flagged to distinguish from other reservation types (Digambar)',
       keyCallouts:'Thresholds and buffers are TBD - trigger cannot function until these are defined<br><br>Dependency on existing OFP tools (OCT and CCC) for tracking; if these tools are unavailable, monitoring has no fallback<br><br>Only supply-chain-side mitigations (NCN not landing on time) are in scope for Holiday'
     },

  n3: {kind:'node', phase:'p1', lane:'OFP/CSCP', title:'Kick off mitigation action',
       layer:'LAYER 1',
       commitmentRep:'Asim Sharief (Region management), Patrick McNallen',
       purpose:'<p>After an ICM is triggered, CSCP acts on cluster slippage notification and expedites a delayed cluster for a timely delivery. The OFP region managers determine severity and best course of action - identify a cluster to repurpose or shape customers.</p>',
       expectedInputs:'ICM ticket with details of delay based on predetermined thresholds, FCR, customer, NCN identifiers, region health/risk detection',
       agreedUpon:[
         {done:'OFP region managers act on the ICM ticket and determine the most fitting mitigation to derisk the cluster: demand shaping, moving OOR clusters to public, eviction, expedite capacity.',
          notDone:'For the holidays, we rely on two options: cluster expedite and cluster repurpose, other options like eviction out of scope for the holidays.'},
         {done:'OFP and CSCP align on cluster expedite, track incoming capacity via OCT looping in help from SCOM, pre-dock, post-dock teams. Notification system alerts to risk in upcoming capacity.',
          notDone:'Manual review of incoming clusters to determine what needs expedite. Waiting on risk to expedite holiday capacity.'},
         {done:'OFP identifies viable cluster for repurpose',
          notDone:'&nbsp;'}
       ],
       keyCallouts:'There is no automation system to expedite clusters - this is entirely manual. Not feasible at scale. Repurposing clusters will be manual as well – eventually could be automated.'
     },

  n4: {kind:'node', phase:'p1', lane:'OFP / CSCP', title:'Deploy approved mitigations',
       layer:'LAYER 1',
       commitmentRep:'Asim Sharief (Region Management), Patrick McNallen (CSCP) and Alexandra Ferchezau',
       purpose:'<p>The mitigation action is carried out and cluster is secured.</p>',
       agreedUpon:[
         {done:'OFP depending on the mitigation pathway – will bring FCR back on schedule by identifying a new cluster from reservation pool; CSCP will expedite the delivery of the NCN cluster',
          notDone:'CSCP to rely on other dedicated hardware to support specific customer demand i.e., capacity will be pulled from future deployments rather than other dedicated hardware'},
         {done:'Region Managers to repurpose cluster reserved for dedicated customer if possible. E.g.: If Shien FCR cannot be fulfilled, Shien cluster will be put back into rotation. Team alias will be provided.',
          notDone:'&nbsp;'},
         {done:'CSCP to expedite hardware for large customers + regional demand (run rate growth) ahead of risk detection',
          notDone:'&nbsp;'}
       ],
       stillNeedsAlignment:'The process of capturing cores from a repurposed cluster, what happens if risk is not mitigated. CMAS keeps rolling out cluster live ETA by default to next day in case of slippage, it does not reflect true ETA&rsquo;s, did we fix this? Worse case scenario: what happens if we are unable to identify a cluster for repurpose?',
       keyCallouts:'Reservation Pool: converting reservation clusters to the public pool as a mitigation option, especially for critical customers, needs to establish logic for such conversions to ensure allocator can manage SLA requirements.<br><br>Repurposing live clusters: if a cluster is already serving customers, it must be emptied or taken out of rotation before being allocated to FCR, and this process involves capacity management.'
     },

  n5: {kind:'node', phase:'p1', lane:'Compute', manual:'N', title:'FCR made available on need by date',
       layer:'LAYER 1',
       commitmentRep:'CRP and allocator',
       purpose:'<p>If mitigated for the FCR requested cores, FCR will be made Live on need by date.</p>',
       agreedUpon:[
         {done:'If mitigated for the FCR requested cores, FCR will be made Live on need by date',
          notDone:'&nbsp;'}
       ]
     },

  n6: {kind:'node', phase:'p1', lane:'Compute', manual:'N', title:'Cluster allocated',
       body:'<p>Allocator assigns the mitigated cluster to the FCR in collaboration with CCC and CMAS reservation plan; CCC updates the cluster schedule to reflect the new allocation.</p>'},

  n7: {kind:'node', phase:'p1', lane:'Compute', manual:'N', title:'Capacity capture plan',
       body:'<p>Capture plan updated to reflect the mitigated allocation; reservation plan updated with new cluster assignment.</p>'},

  n8: {kind:'node', phase:'p1', lane:'Compute', title:'Risk mitigated / Cluster allocated',
       layer:'LAYER 1',
       commitmentRep:'OFP, Allocator, CCC, CMAS',
       purpose:'<p>Ensure that the remediated cluster is updated in CCC for the Allocator to make available to customer per schedule. After a mitigation action (cluster expedite or cluster repurpose) is executed, Allocator sets aside the mitigated cluster capacity for the affected FCR. Coordinates with CCC and CMAS to update reservation plans and cluster schedules.</p>',
       expectedInputs:'Confirmed mitigated cluster from expedite or repurpose action. Updated reservation plan or schedule from CMAS (or manual override via debug API). FCR reservation tags identifying the affected reservation.',
       agreedUpon:[
         {done:'In case of repurpose, OFP updates cluster assignment in CCC – via &ldquo;manual&rdquo; process, using a debug API – with caution to prevent CMAS from overwriting it',
          notDone:'For holiday we will not update repurposed clusters in CMAS'},
         {done:'CCC updates the cluster schedule to reflect the new allocation; reservation plan updated with new cluster assignment',
          notDone:'&nbsp;'},
         {done:'Traceability updates status of FCR to &ldquo;on track&rdquo;',
          notDone:'&nbsp;'},
         {done:'Allocator will assign the mitigated cluster to the FCR in collaboration with CCC and CMAS reservation plan',
          notDone:'&nbsp;'}
       ],
       stillNeedsAlignment:'Process to ensure successful mitigation handoff to Allocator needs to be defined<br><br>Live date for debug API in CCC/Allocator',
       keyCallouts:'If debug API is used for manual schedule overrides, CMAS may overwrite changes on its next 24-hr cycle - safeguards required<br><br>Repurposing live clusters requires capacity management to empty them first before Allocator can act'
     },

  /* ── REACTIVE MITIGATION ── */
  n9: {kind:'node', phase:'p1', lane:'Customer', manual:'N', title:'Customer Failures',
       layer:'LAYER 1',
       commitmentRep:'OFP',
       purpose:'<p>Customer attempts to access FCR and is unable to access the capacity on the due date, even though FCR has been successful and per traceability is live. Potential deployment failures due to component, engineering system.</p>',
       expectedInputs:'Contact with the support channel with FCR failure details',
       agreedUpon:[
         {done:'Customers reach out to &lt;TBD&gt; DL from capacity support pod with questions/issues and relevant details',
          notDone:'&nbsp;'}
       ],
       stillNeedsAlignment:'24/7 support alignment needs alignment, sign off and budget commitments if any.'
     },

  n10:{kind:'node', phase:'p1', lane:'Compute', title:'Engineering Mitigation',
       layer:'LAYER 1',
       commitmentRep:'CRP, CMAS, Allocator Teams',
       purpose:'<p>Reactive escalation to engineering teams to investigate and resolve customer-facing access or deployment failures after FCR is live, ensuring customer can successfully consume reserved capacity.</p>',
       expectedInputs:'Customer-reported issue via support channel, including inability to access FCR capacity and initial triage context, escalated to engineering for investigation as Sev 2 IcM.',
       agreedUpon:[
         {done:'Perform deep technical investigation — analyze component/platform issues causing failure to access or deploy FCR capacity<br><br>Own root-cause analysis — diagnose underlying system, subscription, or service-level issues beyond support triage<br><br>Develop and execute fixes/workarounds — provide immediate mitigation (hotfix, config correction, backend updates) to restore customer access<br><br>Engage in escalation workflows — participate in Sev2-style escalation and drive resolution with required urgency<br><br>Coordinate cross-service resolution — work with dependent systems (Allocator, CMAS, CCC, etc.) if issue spans multiple components<br><br>Update IcM once mitigated to communicate to Support DL<br><br>Support to close the loop with the customer',
          notDone:'No intake/triage, no customer-facing ownership, no supply mitigation actions, and no process/non-technical handling'}
       ],
       stillNeedsAlignment:'Need to define the engineering criteria with Compute and communicate the same to OFP'
     },

  n11:{kind:'node', phase:'p1', lane:'OFP', title:'Customer Support',
       layer:'LAYER 1',
       commitmentRep:'Joseph, Asim, Angela, Liz',
       purpose:'<p>Escalation process and supporting team for customers who have issues since the standard SR process won&rsquo;t be in place.</p>',
       expectedInputs:'Customer-reported issue via support channel, including failure to access FCR capacity and basic context required for triage and escalation.',
       agreedUpon:[
         {done:'Documentation detailing steps and troubleshooting for customers<br><br>Roles and responsibilities definitions for support and technical questions or issues<br><br>Escalation SLA establishment and team engagement flows<br><br>Team ownership with definitions defined',
          notDone:'&nbsp;'},
         {done:'If OFP cannot resolve the issue, engagement with the engineering as Sev 2 ICM along with required dedicated support DL.',
          notDone:'&nbsp;'}
       ],
       stillNeedsAlignment:'Team ownership and responsibilities for support and items listed above still need alignment, sign off and budget commitments if any'
     },

  /* ── EDGES (hand-offs) ── */
  e1: {kind:'edge', phase:'p1', from:'Approved FCR',                to:'FCR slippage trigger',              label:'Tracing',
       body:'<p>Continuous tracing of the Approved FCR&rsquo;s buildout vs Need-by Date.</p>'},
  e2: {kind:'edge', phase:'p1', from:'FCR slippage trigger',        to:'Kick off mitigation action',        label:'Alert →',
       body:'<p>Slippage detected → alert fired (ICM) to OFP+CSCP to begin mitigation.</p>'},
  e3: {kind:'edge', phase:'p1', from:'Kick off mitigation action',  to:'Deploy approved mitigations',       label:'deploy ▸',
       body:'<p>OFP requests CSCP to deploy one of the pre-approved mitigations (cluster expedite or cluster repurpose).</p>'},
  e4: {kind:'edge', phase:'p1', from:'Deploy approved mitigations', to:'Risk mitigated / Cluster allocated', label:'mitigate ▸',
       body:'<p>CSCP / OFP confirm mitigation deployment; Allocator coordinates with CCC and CMAS to update reservation plan.</p>'},
  e5: {kind:'edge', phase:'p1', from:'Risk mitigated / Cluster allocated', to:'Cluster allocated',          label:'← Update',
       body:'<p>OFP updates Compute that the mitigation is in place; Compute records the allocation.</p>'},
  e6: {kind:'edge', phase:'p1', from:'Cluster allocated',           to:'FCR made available on need by date',label:'← Update',
       body:'<p>Compute updates the customer that the FCR is now available on the original Need-by Date.</p>'},
  e7: {kind:'edge', phase:'p1', from:'Customer Failures',           to:'Customer Support',                  label:'Customer interactions ↔',
       body:'<p>Bidirectional communication between the customer and Customer Support: customer files the failure / support requests info / status updates flow back to the customer.</p>'},
  e8: {kind:'edge', phase:'p1', from:'Customer Support',            to:'Engineering Mitigation',            label:'Eng mitigation ↔',
       body:'<p>Customer Support engages Engineering as Sev 2 IcM to investigate, apply mitigation, and reports findings back. Iterative loop until the customer issue is resolved.</p>'}
};
