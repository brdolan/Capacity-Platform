/* ─────────────────────────────────────────────────────────────────────────────
   Slide 6 — content for each box and arrow in the flow chart.
   Edit any title / body / lane / manual value below and refresh the page.

   FIELDS
   ──────
   • title       (nodes only)  Heading shown in the timeline card.
   • label       (edges only)  Heading shown in the timeline card.
   • lane        (nodes only)  Subtitle pill, e.g. "Step · Customer".
   • from / to   (edges only)  Subtitle pill, e.g. "Hand-off · A → B".
   • body                       HTML allowed. Use <p>, <ul><li>, <strong>, <a>, etc.
   • manual                     'N' colors the node light green (automated step).
                                Omit or use any other value for a manual step.
   • phase                      Which timeline tile (p1 / p2 / p3) it shows under.
   • kind                       'node' or 'edge' — DO NOT change.
   ───────────────────────────────────────────────────────────────────────────── */
window.FLOW_DETAILS = {
  /* ── PHASE 1: Now – 1H Aug ── */
  n1:  {kind:'node', phase:'p1', lane:'FIT', title:'Demand',
        layer:'LAYER 1',
        commitmentRep:'Liz Gentile',
        body:'<p>Walmart submits the projected capacity demand for the holidays and submits it for qualification to the FIT team in OFP.</p>',
        purpose:'<p>(closely with &ldquo;Qualify&rdquo;) Customer team + account team work with customer to identify specific capacity plans for the intended event / workload. The customer may revise these plans between the time initially discussed with Microsoft prior to the actual event / workload timeline, in which case the process may reset. For some customers, like Walmart, CSCP demand forecasting team is developing the forecast on behalf of the customer, which the customer then verifies.</p>',
        expectedInputs:'Capacity plans with possible regions, specifics of zonal needs, Azure services / SKUs, Quantity per zone, any bandwidth needs, timeline of deployment, plans to use SPOT, any performance requirements, subscription IDs when known, any quota that might be needed, and where customer is flexible. The customer owner and/or account team maintains these requirements in a dedicated document. Any Compute or Storage specifics are also recorded in DIP.',
        agreedUpon:[
          {done:'For specific list of Holiday 2026 FCR customers, customer team will interface with MCAPS and customer as needed to inform, co-plan, and gather demand details.<br><br>Note: These customers will have been pre-identified and briefed by Azure LT on requirement for FCR for this holiday.',
           notDone:'Briefing customer on FCR requirement needs to be done by Azure LT for certain customers, like Walmart'}
        ],
        stillNeedsAlignment:'Final list of customers',
        keyCallouts:'Plan to brief customers on requirement for FCR for this holiday'},
  n2:  {kind:'node', phase:'p1', lane:'OFP',      title:'Qualify',
        layer:'LAYER 1',
        commitmentRep:'Liz Gentile and Asim Sharief',
        body:'<p>FIT team triages the proposed demand and works with Region management to qualify it.</p>',
        purpose:'<p>(closely with &ldquo;Assemble&rdquo; and &ldquo;Feasibility&rdquo;) AzCAFE drives the process to evaluate plans and includes other teams as needed [AzFC / CSCP / CO+I / EGs / Finance] to determine feasibility. Alternatives are proposed when customer ask/need cannot be met.</p>',
        expectedInputs:'Capacity plans with possible regions, specifics of zonal needs, Azure services / SKUs, Quantity per zone, any bandwidth needs, timeline of deployment, plans to use SPOT, any performance requirements, subscription IDs when known, any quota that might be needed, and where customer is flexible. The customer owner and/or account team maintains these requirements in a dedicated document. Any Compute or Storage specifics are also recorded in DIP.',
        agreedUpon:[
          {done:'Customer demand will be clarified and recorded in DIP.',
           notDone:'Any needed quota increases and supportability coordination will be done later.'},
          {done:'Customer will be given details on how FCR process will work',
           notDone:'&nbsp;'},
          {done:'Additional quota potentially required for FCR will be identified',
           notDone:'&nbsp;'}
        ],
        stillNeedsAlignment:'Holiday specific demand identifier'
      },
  n3:  {kind:'node', phase:'p1', lane:'OFP',      title:'Collect',
        layer:'LAYER 1',
        commitmentRep:'Liz Gentile and Asim Sharief',
        body:'<p>Region management team works with CSCP to understand if it is feasible for the specific region/AZ requirements of the customer.</p>',
        purpose:'<p>Demand is clarified by service, sku, timeline, amounts and brought to region owners + relevant EGs for feasibility evaluation / required cluster and MW translation, in preparation to discuss with CSCP.</p>',
        expectedInputs:'Capacity plans with possible regions, specifics of zonal needs, Azure services / SKUs, Quantity per zone, any bandwidth needs, timeline of deployment, plans to use SPOT, any performance requirements, subscription IDs when known, any quota that might be needed, and where customer is flexible. The customer owner and/or account team maintains these requirements in a dedicated document. Any Compute or Storage specifics are also recorded in DIP.',
        agreedUpon:[
          {done:'Coordination with EGs, OFP region management and CSCP stakeholders to identify cluster needs and supportability.<br><br>Coordinate evaluation in whale forum as needed',
           notDone:'&nbsp;'},
          {done:'Region managers will provide on ground capacity info, reserved clusters capacity + the number of racks needed.',
           notDone:'&nbsp;'},
          {done:'Revisit customer plans as required when feasibility is not high confidence',
           notDone:'&nbsp;'}
        ]
      },
  n4:  {kind:'node', phase:'p1', lane:'CSCP OFP',     title:'Feasibility',
        layer:'LAYER 1',
        commitmentRep:'Patrick McNallen and Asim Sharief',
        purpose:'<p>Need to assess the feasibility of large holiday asks from Whale customers before commiting to supporting them. Feasibility involves space/power/cooling and rack supply supportability reviews.</p>',
        expectedInputs:'Expected customer demand (VMs + rack volume), zonal customer requirements, space/power projections, customer scale-up requirements',
        agreedUpon:[
          {done:'FIT team to receive ask and communicate demand in total cores/VMs with timing/zonal requirements to region managers + forecasting team.',
           notDone:'FIT teams to communicate total demand directly to planners. The customer asks must be directed to forecasting teams and approved at an LT level before planning racks.'},
          {done:'CSCP to review rack supply availability vs the total ask and projected quarterly demand. CSCP will confirm how many racks are supportable after alignment with SCOM.',
           notDone:'CSCP to dock racks ahead of rack supply assessment.'},
          {done:'CSCP (RCM team) to review projected space/power/cooling in key regions with CO&amp;I and confirm we can dock the necessary amount of racks.',
           notDone:'CSCP to dock racks ahead of space/power/cooling assessment.'}
        ],
        stillNeedsAlignment:'N/A',
        keyCallouts:'Hero regions must be reviewed for zonal spc supportability, not at a regional grain. We cannot commit to supporting large customers if their asks are zonal, and we are blocked in one zone.'
      },
  n14: {kind:'node', phase:'p1', lane:'CSCP',     title:'Approved supply plan per zone',
        layer:'LAYER 1',
        commitmentRep:'Patrick McNallen',
        purpose:'<p>FIT team communicates zonal requirements to forecasting team; this requirement is captured in the forecast and CSCP updates the plan to reflect zonal demand.</p>',
        expectedInputs:'Customer demand request: amount of vcores required, when they are required (month to month ramp), zonal split, region preferences, VM family',
        agreedUpon:[
          {done:'Forecasting team to capture full demand and align with LT that we are approved to signal (post-feasibility assessment)​',
           notDone:'No auto approval for new ramp plans; the demands need to get vetted for supportability and approved by LT'},
          {done:'OFP confirms what zonal capacity is live/available on ground, how much incremental capacity is requirement to support zonal demand. ​',
           notDone:'Capacity signaled 100% reflecting the demand plan without reviewing the live fleet.'},
          {done:'CSCP to review with RCM how many incremental slots are available in each constrained zone to confirm supportability of zonel demand.',
           notDone:'Plan is signaled ahead of zonal supportability.'}
        ],
        keyCallouts:'Zonal capacity has a longer lead time than delivering regional capacity (due to obtaining reservations in constrained zones), these asks need to be communicated even further ahead of time.'
      },

  /* ── PHASE 2: 2H Aug – Sept ── */
  n5:  {kind:'node', phase:'p2', lane:'Customer', title:'Quota group',
        body:'<p>Customer creates a quota group where all the quota will be collected for the entire holiday season.</p>'},
  n6:  {kind:'node', phase:'p2', lane:'Customer', manual:'N', title:'Req quota',
        layer:'LAYER 1',
        commitmentRep:'Customer Team, Region Ops',
        purpose:'<p>Customer team works with customer to identify needed quota for the FCR and drives customer to make quota requests.  Customer team tracks and tags those rdquota tickets, coordinating with region owner for approval.</p>',
        expectedInputs:'Pre-approval of overall demand plan by region management / CSCP',
        agreedUpon:[
          {done:'Work with customer to get quota needs identified (Customer team)<br><br>Enable a process to prevent untimely case closure for FCR requests (region ops)',
           notDone:'&nbsp;'},
          {done:'Give instructions to the customer on how to open a quota request for FCR (eg zonal enablement + quota increase). Set expectations around possibility of backlogging due to Tier 2 handling.<br><br>Work with customer to get quota requests submitted (Customer team)',
           notDone:'Special process to prevent backlogging or standard verbiage'},
          {done:'Monitor and tag quota requests / coordinate with region owner for approval (Customer team)',
           notDone:'&nbsp;'}
        ]
      },
  n7:  {kind:'node', phase:'p2', lane:'OFP',      title:'Quota eval',
        layer:'LAYER 1',
        commitmentRep:'Region Management',
        purpose:'<p>Check if the quota ticket created matches with what was aligned with the customer owner team, provide approval based on supply plan/reserved capacity etc.</p>',
        expectedInputs:'Customer demand request &lt;Customer, Region, Zonal or Regional, VM, cores&gt;',
        agreedUpon:[
          {done:'Respective region manager and the cm-extended team will check and approve the quota request manually.',
           notDone:'&nbsp;'},
          {done:'Region management will reach out to customer owners to confirm again and in cases of discrepancies',
           notDone:'&nbsp;'}
        ],
        stillNeedsAlignment:'Identifying if the quota ticket is for FCR'
      },
  n8:  {kind:'node', phase:'p2', lane:'Customer', manual:'N', title:'Subscription',
        body:'<p>Customer subscription used for FCR deployment, after AFEC registration and region enablement is complete.</p>'
      },
  n9:  {kind:'node', phase:'p2', lane:'Customer', manual:'N', title:'Req FCR',
        layer:'LAYER 1',
        commitmentRep:'CRP, Compute and FIT team',
        purpose:'<p>Customer deploys ARM template or uses CRP API to create FCR based on customer guidance doc.</p>',
        expectedInputs:'FCR request from customer',
        agreedUpon:[
          {done:'After AFEC registration and FCR config enablement in region is confirmed by compute, FIT team communication with customer need to happen to deploy FCR using customer guidance ARM template.',
           notDone:'&nbsp;'}
        ],
        keyCallouts:'ARM Template to be supplied by CRP Team'
      },
  n10: {kind:'node', phase:'p2', lane:'Compute',  manual:'N', title:'FCR catalog',
        layer:'LAYER 1',
        commitmentRep:'Digambar Paunikar and CMAS, FRS Team',
        purpose:'<p>Receives the FCR request submitted via API / ARM template<br><br>Applies catalog-level validation / rules (shape, eligibility, etc.)<br><br>Sends request forward to OFP for evaluation<br><br>Returns decision signal back (approve/decline loop)</p>',
        expectedInputs:'SubId, Region/AZ, VM Size, Quantity (Cores/VMs), Need by Date, Duration/commitment (If applicable)',
        agreedUpon:[
          {done:'Ingest, validate, route, and track FCR requests—driving approval flow and enabling quota release and provisioning at go-live',
           notDone:'Does not evaluate, approve, plan, or execute capacity—only validates and routes requests within the approval workflow'}
        ],
        keyCallouts:'Assumes quota eligibility and valid request payload upfront<br><br>Catalog = single entry point → failures here block entire flow<br><br>Validation/schema misalignment can cause downstream planning and fulfillment failures'
      },
  n11: {kind:'node', phase:'p2', lane:'OFP',      title:'FCR eval (DIP)',
        layer:'LAYER 1',
        commitmentRep:'Region Management',
        purpose:'<p>FCR request will be raised in the DIP system</p>',
        expectedInputs:'Notification to region management alias/reminders and Customer demand request with confirmation that the quota has been approved. &lt;e.g. what information are you getting, what is coming in?&gt;',
        agreedUpon:[
          {done:'Respective Region managers or extended team will review and approve the request manually within 4 days',
           notDone:'&lt;but owning team will not do this.<br><br>E.g. no auto approval until post holiday for smaller requests&gt;'},
          {done:'&lt;owning team will also do this.  e.g. approval or reject all requests within 4 days&gt; Rejection is out of scope since quota has been approved',
           notDone:'Continue doing this manually after holidays'},
          {done:'Region Manager will sync with Customer Owners if clarification is needed',
           notDone:'&nbsp;'}
        ],
        stillNeedsAlignment:'Since quota tickets already have subs, do region managers need to approve multiple FCR requests from a single customer? Can these all be clubbed by single customer for a particular region? Will this step still be needed after holidays?',
        keyCallouts:'Needs Automation – Region Management cannot review all FCR requests manually'
      },
  n12: {kind:'node', phase:'p2', lane:'Customer', manual:'N', title:'Approved FCR (state)',
        body:'<p>Once the request is approved by OFP it transitions to the Approved FCR state on the customer subscription.</p>'},
  n13: {kind:'node', phase:'p2', lane:'Compute',  manual:'N', title:'Capacity capture plan',
        body:'<p>Compute keeps track of all the future capacity that is planned in the supply plan to then track and make it available to customer on the need by date.</p>'},

  /* ── PHASE 3: Oct – Nov ── */
  n15: {kind:'node', phase:'p3', lane:'Compute', manual:'N', title:'Post Approval flow'},
  n17: {kind:'node', phase:'p2', lane:'Compute', title:'Subscription AFEC Registration and region enable',
        layer:'LAYER 1',
        commitmentRep:'CRP team',
        purpose:'<p>AFEC registration for subscription and FCR region config enablement</p>',
        expectedInputs:'Subscription and region/zone information',
        agreedUpon:[
          {done:'Customer team/FIT team will gather subscriptions requiring access to FCR and work with CRP team to enable',
           notDone:'CRP team will AFEC register the subscription and enable config for region'},
          {done:'CRP team will AFEC register the subscription and enable config for region',
           notDone:'&nbsp;'},
          {done:'CRP/Compute will let FIT team know of process completion and FIT team will let customer know that AFEC registration is completed',
           notDone:'&nbsp;'}
        ]
      },

  /* ── EDGES (hand-offs) ── */
  e1:  {kind:'edge', phase:'p1', from:'Demand',        to:'Qualify',     label:'Proposed →',
        body:'<p>Customer hands the proposed demand in spreadsheets to FIT for qualification.</p>'},
  e2:  {kind:'edge', phase:'p1', from:'Qualify',       to:'Demand',      label:'← Decision',
        body:'<p>FIT returns qualified/decline decision to the Customer.</p>'},
  e3:  {kind:'edge', phase:'p1', from:'Qualify',       to:'Collect',     label:'Qualified →',
        body:'<p>Qualified demand forwarded to Region management for evaluation.</p>'},
  e4:  {kind:'edge', phase:'p1', from:'Collect',       to:'Qualify',     label:'← Decision',
        body:'<p>OFP returns decision on feasibility to FIT.</p>'},
  e5:  {kind:'edge', phase:'p1', from:'Collect',       to:'Feasibility', label:'Request →',
        body:'<p>OFP requests CSCP to confirm feasibility against the existing supply plan.</p>'},
  e6:  {kind:'edge', phase:'p1', from:'Feasibility',   to:'Collect',     label:'← Decision',
        body:'<p>CSCP responds with feasible / not feasible.</p>'},
  e7:  {kind:'edge', phase:'p2', from:'Quota group',   to:'Req quota',   label:'open',
        body:'<p>Customer initiates a quota request from the quota group context.</p>'},
  e8:  {kind:'edge', phase:'p2', from:'Req quota',     to:'Quota eval',  label:'Request →',
        body:'<p>Quota request sent to OFP for evaluation.</p>'},
  e9:  {kind:'edge', phase:'p2', from:'Quota eval',    to:'Req quota',   label:'← Decision',
        body:'<p>OFP&rsquo;s approve/decline returned to the customer.</p>'},
  e10: {kind:'edge', phase:'p2', from:'Quota group',   to:'Subscription',label:'Quota transfer',
        body:'<p>Approved quota transferred to the target subscription.</p>'},
  e11: {kind:'edge', phase:'p2', from:'Subscription',  to:'Req FCR',     label:'open',
        body:'<p>Customer initiates the FCR request against the subscription.</p>'},
  e12: {kind:'edge', phase:'p2', from:'Req FCR',       to:'FCR catalog', label:'Request →',
        body:'<p>FCR request submitted to the Compute catalog.</p>'},
  e13: {kind:'edge', phase:'p2', from:'FCR catalog',   to:'Req FCR',     label:'← Decision',
        body:'<p>Compute returns catalog-level decision.</p>'},
  e14: {kind:'edge', phase:'p2', from:'FCR catalog',   to:'FCR eval (DIP)', label:'Request →',
        body:'<p>Compute forwards the FCR to OFP for evaluation.</p>'},
  e15: {kind:'edge', phase:'p2', from:'FCR eval (DIP)',to:'FCR catalog', label:'← Decision',
        body:'<p>OFP returns approve/decline.</p>'},
  e16: {kind:'edge', phase:'p2', from:'Req FCR',       to:'Approved FCR',label:'state transition',
        body:'<p>Req FCR transitions to Approved FCR state on the subscription.</p>'},
  e17: {kind:'edge', phase:'p2', from:'FCR catalog',   to:'Capacity capture plan', label:'state transition',
        body:'<p>Compute records captured capacity in the catalog.</p>'},
  e18: {kind:'edge', phase:'p2', from:'Feasibility',   to:'Approved supply plan per zone', label:'derives',
        body:'<p>The CSCP-approved supply plan per zone derives from the earlier feasibility outcome.</p>'},
  e19: {kind:'edge', phase:'p3', from:'Approved FCR',  to:'Post Approval flow',   label:'enable (Oct-Nov)',
        body:'<p>Approved FCR feeds into the Approval Flow in the Oct - Nov window.</p>'},
  e21: {kind:'edge', phase:'p2', from:'Subscription AFEC Registration and region enable', to:'Req quota', label:'← Decision',
        body:'<p>After Subscription AFEC Registration and region enable, decision is returned to the customer&rsquo;s quota request.</p>'}
};
