/* ─────────────────────────────────────────────────────────────────────────────
   Slide 7 — content for each box and arrow in the flow chart.
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
  /* ── PHASE 1: 2H Aug – Sept ── */
  n1: {kind:'node', phase:'p1', lane:'Customer', manual:'N', title:'Approved FCR',
       body:'<p>The customer&rsquo;s Approved FCR (output of Scenario 1 / Slide 5) is the starting state for post-approval execution.</p>',
        commitmentRep:'<em>(example)</em> First Last',
        purpose:'<p>The customer&rsquo;s Approved FCR (output of Scenario 1 / Slide 5) is the starting state for post-approval execution.</p>',
        agreedUpon:[
          {done:'<em>(example)</em> Owner team scopes the step and confirms inputs.',
           notDone:'<em>(example)</em> No retro-active changes once committed.'}
        ]},
  n2: {kind:'node', phase:'p1', lane:'Compute', manual:'N', title:'Capacity capture plan',
       body:'<p>Compute&rsquo;s capture plan entry recorded against the FCR — feeds the supply signal.</p>'},
  n3: {kind:'node', phase:'p1', lane:'Compute', manual:'N', title:'Supply Signal generation',
        layer:'LAYER 1',
        commitmentRep:'CMAS Team',
        purpose:'<p>Convert an approved FCR into a concrete supply signal that downstream systems (CSCP) can use to plan and deliver capacity</p>',
        expectedInputs:'Approved FCR and its capture plan, enriched with supply context and metadata, to generate execution-ready supply signals/NCN',
        agreedUpon:[
          {done:'CMAS will generate supply signal from approved FCR + capture plan<br><br>Translate demand into execution-ready signal (e.g., NCN / capacity need)<br><br>Emit signal to CSCP for zone-level supply planning and buildout scheduling with defined schema',
           notDone:'It does not plan, execute, or resolve supply.'}
        ],
        keyCallouts:'Assumes approved, reconciled FCR inputs and consistent signal schema—any mismatch, delay, or duplication breaks downstream supply planning.'
      },
  n4: {kind:'node', phase:'p1', lane:'CSCP',     title:'Supply Planning',
        layer:'LAYER 1',
        commitmentRep:'CSCP Planning Engg and planners',
        purpose:'<p>Translate supply signals into zone-level capacity plans that drive buildout scheduling and fulfillment execution.</p>',
        expectedInputs:'Approved supply signal (NCN), capacity capture plan, and region/zone-level demand metadata (SKU, quantity, need-by date, customer, request type)',
        agreedUpon:[
          {done:'Ingest supply signals (NCNs) and demand metadata<br><br>Perform zone/region-level capacity planning by creating capacity order followed by cluster creation with required tags for tracing for compute and buildout<br><br>Generate buildout schedule and supply plan for execution',
           notDone:'No generation or modification of supply signals<br><br>No direct buildout execution or provisioning<br><br>No customer-facing actions or FCR approval decisions'}
        ],
        stillNeedsAlignment:'CSCP Alignment is in progress to map the NCNs with the capacity order and cluster with required tagging programmatically',
        keyCallouts:'Assumes accurate, timely supply signals and aligned inputs—any delays, data gaps, or mismatches can break zone-level planning and buildout readiness.'
      },

  /* ── PHASE 2: Oct – Nov ── */
  n5: {kind:'node', phase:'p2', lane:'Compute', manual:'N', title:'Live FCR by Need by Date',
        layer:'LAYER 1',
        commitmentRep:'CRP/FRS /Allocator team',
        purpose:'<p>FCR made usable for customer when in Live state on need by date</p>',
        agreedUpon:[
          {done:'CRP will make the FCR Live for customer to start using on need by date',
           notDone:'If FCR is not fulfilled, FCR won\'t be in Live state. It will be in Fulfillment Failed state'}
        ]
      },
  n6: {kind:'node', phase:'p2', lane:'Compute', manual:'N', title:'Secure Capacity',
        layer:'LAYER 1',
        commitmentRep:'Allocator, CCC, CMAS Teams',
        purpose:'<p>Ensure live capacity is reserved, protected, and committed for approved FCRs so it is guaranteed and ready for customer activation on need‑by date</p>',
        expectedInputs:'Allocated clusters/buildout output, approved FCR reservation details, and capacity reservation plan from CMAS/Allocator',
        agreedUpon:[
          {done:'Capacity will be reserved and protected against approved FCRs by tagging and allocating clusters via CMAS/Allocator reservation plan to ensure availability at need‑by date',
           notDone:'No new capacity creation, no changes to supply plan or signals, and no customer activation or provisioning actions.'}
        ],
        stillNeedsAlignment:'Alignment needed on how to handle the Add rack no support from buildout side<br><br>How to handle the Reserved live cluster to provision FCR capacity.',
        keyCallouts:'Assumes capacity is correctly reserved and protected via consistent tagging—any mismatch, release, or competing allocation of reserved capacity breaks FCR fulfillment guarantees.'
      },
  n7: {kind:'node', phase:'p2', lane:'Compute', manual:'N', title:'Capacity capture plan',
       body:'<p>Final capacity capture plan reflecting the secured & live capacity.</p>'},
  n8: {kind:'node', phase:'p2', lane:'OFP', manual:'N', title:'Buildout',
        layer:'LAYER 1',
        commitmentRep:'Buildout Team',
        purpose:'<p>Stand up the required physical capacity (clusters) aligned to approved FCR and supply plan for fulfillment</p>',
        expectedInputs:'Customer demand request &lt;e.g. what information are you getting, what is coming in?&gt;',
        agreedUpon:[
          {done:'Make cluster live for approved FCR and supply plan based on need by date by executing cluster buildout (rack, power, network ready)<br><br>Coordinate with CMAS to reflect reservation plan as part of trace events with required tagging with Non Infra<br><br>For Holiday- No Add rack support for FCR clusters',
           notDone:'No supply planning or demand validation decisions<br><br>No generation or modification of supply signals (NCNs)<br><br>No customer-facing actions or enablement of FCR for use'}
        ],
        stillNeedsAlignment:'CSCP and buildout Alignment is in progress for<br><br>Cluster with required tagging programmatically<br><br>No Add rack support for FCR planned clusters',
        keyCallouts:'Assumes buildout execution aligns to plan and timelines—any delays in cluster readiness, infra dependencies, or misalignment with reservation signals breaks fulfillment readiness.'
      },

  /* ── EDGES (hand-offs) ── */
  e1: {kind:'edge', phase:'p1', from:'Approved FCR',             to:'Supply Signal generation', label:'supply ▸',
       body:'<p>Approved FCR triggers Compute to generate a supply signal against the capture plan.</p>'},
  e2: {kind:'edge', phase:'p1', from:'Supply Signal generation', to:'Supply Planning',          label:'signal ▸',
       body:'<p>Compute emits the supply signal to CSCP for zone-level planning.</p>'},
  e3: {kind:'edge', phase:'p2', from:'Supply Planning',          to:'Buildout',                 label:'plan ▸',
       body:'<p>CSCP&rsquo;s supply plan drives the OFP buildout schedule, and buildout completion is notified back through OFP for handover to Compute.</p>'},
  e5: {kind:'edge', phase:'p2', from:'Buildout',                 to:'Secure Capacity',          label:'build ▸',
       body:'<p>OFP hands the built capacity to Compute to secure against the FCR.</p>'},
  e6: {kind:'edge', phase:'p2', from:'Secure Capacity',          to:'Live FCR by Need by Date', label:'deliver ▸',
       body:'<p>Compute provisions the live FCR on the customer subscription by the Need-by Date.</p>'}
};
