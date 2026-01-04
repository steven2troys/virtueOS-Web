# **The Bifurcation of Intelligence: A Technical Synthesis of Frontier Algorithms and Novel Substrates toward AGI (2024-2026)**

## **1\. Executive Strategy: The Post-Scaling Era**

The trajectory of Artificial Intelligence development has undergone a fundamental phase transition in the 2024-2025 period. For the preceding decade, the field was dominated by a singular heuristic: the Scaling Hypothesis, which posited that increasing parameter counts and dataset sizes in autoregressive Transformers would monotonically yield general capabilities. While this paradigm successfully birthed the era of Generative AI, the research frontier has now decisively pivoted. The pursuit of Artificial General Intelligence (AGI)—defined rigorously as systems capable of efficient skill acquisition on novel tasks without extensive pre-training—is no longer solely a function of compute volume but of architectural novelty and substrate efficiency.

Current advancements suggest a bifurcation in the roadmap toward AGI. We are witnessing the end of the "train-once, infer-many" paradigm and the rise of adaptive, "System 2" architectures on the software side, coupled with a radical departure from the Von Neumann architecture on the hardware side.

On the **software front**, the focus has shifted from static pre-training to dynamic reasoning. The most significant breakthroughs of 2024 and 2025—Test-Time Training (TTT), Discrete Diffusion for planning, and non-generative World Models (JEPA)—address the fundamental inability of autoregressive models to plan over long horizons or adapt to rules outside their training distribution. These methods introduce "thinking" as a computational process distinct from "generation," effectively decoupling intelligence from the mere statistical prediction of the next token.

On the **hardware front**, the thermodynamic and bandwidth limits of silicon are driving the industry toward exotic substrates. The "Memory Wall"—the energetic cost of moving data—is forcing the commercialization of photonic interconnects (Lightmatter, Avicena) that allow data centers to function as single coherent chips. Simultaneously, the energy inefficiency of digital simulation is birthing "neurogenic" computing: self-assembling atomic switch networks and wetware (organoid) processors that emulate the brain's physics rather than simulating its logic.

This report provides an exhaustive technical analysis of these advances, synthesizing data from over 150 research artifacts to map the engineering reality of AGI development entering 2026\. It argues that AGI will not be achieved by a bigger Transformer on a bigger GPU, but by a hybrid architecture that combines symbolic reasoning, fluid neural adaptation, and biologically inspired energy efficiency.

## ---

**2\. The Reasoning Frontier: Software and Architectural Advances**

The primary critique of Large Language Models (LLMs) as AGI candidates is their reliance on pattern matching and interpolation within a training distribution. To achieve strong AI, systems must demonstrate *extrapolation*—solving novel problems without explicit prior instruction. The 2024-2025 period has seen the emergence of "System 2" techniques designed to bridge this gap.

### **2.1. Solving ARC-AGI: Test-Time Training (TTT) and the End of Fixed Weights**

The Abstraction and Reasoning Corpus (ARC-AGI), introduced by François Chollet, remains the definitive benchmark for general intelligence because it resists memorization. It measures the efficiency of skill acquisition: given a few examples of a novel logical transformation, can the system deduce the rule and apply it? As of late 2024, the state-of-the-art (SOTA) on ARC-AGI moved significantly, propelled not by larger models, but by the adoption of inference-time optimization techniques.1

#### **2.1.1. The Limitation of Static Deep Learning**

Historical performance on ARC-AGI by pure deep learning models was poor because these models freeze their knowledge weights after pre-training. A standard Transformer applies the same frozen circuit to every problem, regardless of complexity. It cannot "learn" the specific physics of a novel puzzle during the inference window.2 It essentially attempts to retrieve a solution from its training memory, which fails when the task is truly novel.

The breakthrough came with the realization that "learning" should not stop when pre-training ends. The 2024 ARC Prize winners, "The ARChitects," achieved a score of 53.5% on the private evaluation set—a massive leap from the previous 33% SOTA—by abandoning the "fixed weights" dogma.1

#### **2.1.2. The Mechanism of Test-Time Training (TTT)**

The winning approach utilizes Test-Time Training (TTT), a method where the model is fine-tuned *on the test instance itself* before generating a solution.4 This process effectively turns the inference phase into a mini-training session.

1. **Data Augmentation:** Upon receiving a new ARC task (which typically contains 2-3 demonstration pairs), the system generates geometric variations of these pairs (rotations, flips, color swaps). This creates a synthetic "micro-dataset" relevant only to the current problem.4  
2. **LoRA Adaptation:** A Low-Rank Adaptation (LoRA) layer—a small set of trainable parameters inserted into the main model—is initialized. The model then trains *only* these LoRA weights on the augmented examples for a limited number of steps (e.g., 128 steps).5  
3. **Latent Rule Encoding:** This optimization forces the model to compress the specific transformation rule of the puzzle into its temporary LoRA weights. The model literally "wires" the logic of the puzzle into its own brain for the duration of the task.6  
4. **Inference:** Once adapted, the model predicts the solution for the test input.

This recursive loop mimics human "thinking"—a temporary rewiring of neural pathways to adapt to a specific problem context. It suggests that future AGI architectures will be "dual-process" systems: a frozen "long-term memory" backbone (System 1\) that holds general world knowledge, and a plastic "working memory" optimizer (System 2\) that updates parameters in real-time to handle novel situations.7 The implication is profound: inference is no longer a distinct phase from training; they are a continuum.

### **2.2. Beyond Autoregression: Discrete Diffusion for Planning**

Autoregressive (AR) models generate tokens sequentially ($x\_t$ given $x\_{\<t}$). While effective for prose, this creates a "subgoal imbalance" in reasoning tasks. The model must commit to early steps in a plan (e.g., the first number in a Sudoku puzzle) without knowing if those steps will lead to a contradiction later. AR models lack "lookahead" capability.8

#### **2.2.1. Discrete Diffusion Mechanics**

Research published in late 2024 introduces **Discrete Diffusion** as a superior architectural alternative for complex reasoning. Unlike AR, which paints a picture from left to right, diffusion models generate the entire solution sequence simultaneously, starting from random noise and refining it iteratively.9

The process begins with a sequence of completely random tokens. Over several "denoising" steps, a Transformer predicts the correct tokens for all positions at once. Crucially, the model can "change its mind" about the beginning of the sequence based on information emerging at the end of the sequence. This bidirectional visibility allows for global constraint satisfaction.10

#### **2.2.2. Multi-Granularity Diffusion Modeling (MGDM)**

To further enhance planning, researchers developed **Multi-Granularity Diffusion Modeling (MGDM)**. This technique addresses the "subgoal imbalance" by explicitly prioritizing difficult subgoals during the training process.

The loss function in MGDM is modified to weight specific tokens (subgoals) differently based on their difficulty:

$$\\mathcal{L}\_{\\text{MGDM}} \= \\sum\_{t=1}^{T} w\_t \\| \\text{Subgoal}\_t \- \\text{Prediction}\_t \\|^2$$  
By reweighting loss terms at both the sequence and token levels, MGDM allows the model to "sketch" the global plan (e.g., the key pivots in a routing problem) before filling in local details.9

#### **2.2.3. Performance Superiority**

The empirical results of this shift are stark. On complex planning benchmarks like Boolean Satisfiability and Countdown (a math game requiring operations to reach a target number), MGDM achieved **91.5% and 100% accuracy** respectively. In contrast, autoregressive baselines (like GPT-4 class models) scored less than 46% on Countdown and roughly 20% on Sudoku.8

This implies that future reasoning agents will likely switch from AR Transformers to **Diffusion Transformers (DiTs)** when encountering tasks requiring backtracking, global logic, or constraint satisfaction.12 The "Thought Chain" of 2026 will likely be a diffusion process, not a generation process.

### **2.3. Non-Generative World Models: JEPA**

Yann LeCun's critique of generative AI (like Sora or GPT-4) centers on the inefficiency of predicting every pixel in a video to understand the world. Generative models waste vast compute modeling stochastic details (the flutter of a leaf) that are irrelevant to the task (predicting if the car will crash). The **Joint Embedding Predictive Architecture (JEPA)** offers a non-generative alternative designed specifically for planning and control.13

#### **2.3.1. V-JEPA 2 and Abstract Prediction**

The **V-JEPA 2** model (2025) scales this architecture to video by predicting *representations* in a latent space rather than raw pixels.13

* **Architecture:** It uses a Vision Transformer (ViT-g/16) backbone with 1 billion parameters.  
* **Mechanism:** The model takes a video sequence and masks out large spatio-temporal blocks. A "Predictor" network then attempts to predict the latent embedding of the masked regions based on the visible regions.13  
* **Outcome:** To succeed at this task, the model must learn high-level semantic physics (gravity, object permanence, collision dynamics) because the latent space discards pixel-level noise. It learns the "concept" of the car moving, not the "pixels" of the car moving.15

#### **2.3.2. Hierarchical Planning (H-JEPA)**

This architecture enables **Hierarchical Planning**, a capability sorely missing in current LLMs. An agent equipped with a JEPA world model can simulate sequences of actions in the abstract representation space to minimize a "cost" function (e.g., distance to goal). Because it is predicting low-dimensional embeddings rather than high-dimensional video frames, it can simulate thousands of potential futures in a fraction of a second.13

This makes JEPA the preferred architecture for **Embodied AGI** (robotics), where an agent must plan actions in a complex, noisy physical world. The transition from "Generative World Models" (simulating the video of the future) to "Abstract World Models" (simulating the state of the future) is a key trend for 2026\.14

### **2.4. Liquid Neural Networks and Foundation Models**

While Transformers dominate static data, they struggle with continuous-time data streams (video, audio, financial ticks). **Liquid Neural Networks (LNNs)**, commercialized in 2025 by Liquid AI as **Liquid Foundation Models (LFMs)**, represent a move away from discrete-time processing toward dynamical systems.16

#### **2.4.1. Dynamical Systems Architecture**

LNNs are based on ordinary differential equations (ODEs). Unlike a standard neuron which has a fixed activation function, a "liquid" neuron has a time-constant that is input-dependent. The equations governing the network change continuously based on the data flowing through them.17

$$\\frac{dx(t)}{dt} \= \- \\frac{x(t)}{\\tau} \+ S(t)$$

This allows the network to be incredibly efficient at processing time-series data. It captures causal dependencies over time without the massive memory overhead of maintaining a Key-Value (KV) cache like a Transformer.

#### **2.4.2. Liquid Foundation Models (LFMs)**

In 2025, Liquid AI released LFMs in 1B, 3B, and 40B parameter sizes. These models demonstrate state-of-the-art performance on sequential data while maintaining a smaller memory footprint and more efficient inference than comparable Transformers.18 This suggests a future where AGI is not a single architecture, but a composite: LNNs handling continuous sensory streams (eyes, ears), feeding into Discrete Diffusion planners (frontal cortex) for logic.

### **2.5. Algorithmic Efficiency: The L-Mul Breakthrough**

As models grow, the energy cost of floating-point multiplication (Float8, Float16) becomes a limiting factor. In 2024/2025, researchers introduced **L-Mul (Linear-Complexity Multiplication)**, an algorithmic approximation that fundamentally alters the economics of training.19

* Mechanism: L-Mul approximates floating-point multiplication using integer addition. The operation exploits the bit-level representation of floating-point numbers:

  $$x \\cdot y \\approx 2^{E\_x \+ E\_y \+ L(M\_x) \+ L(M\_y)}$$

  By handling the mantissa ($M$) with linear operations rather than quadratic multiplications, L-Mul achieves high precision without the heavy arithmetic logic units (ALUs) required for standard floats.20  
* **Impact:** This reduces the energy cost of tensor multiplications by up to **95%** and dot products by **80%**.21 Crucially, evaluation on benchmarks shows negligible accuracy loss compared to Float8. This algorithmic breakthrough effectively decouples model size from energy consumption, permitting AGI-scale models to run on power-constrained edge hardware or vastly reducing the carbon footprint of training clusters.22

## ---

**3\. The Hardware Substrate: Breaking the Thermal and Memory Walls**

As algorithmic complexity grows, the physical movement of data becomes the primary bottleneck. We have hit the "Memory Wall"—the point where the energy and latency cost of moving data between memory (DRAM) and compute (Logic) exceeds the cost of the computation itself. The 2024-2025 period marks the beginning of the post-copper era in high-performance computing (HPC).

### **3.1. The Interconnect Revolution: Lightmatter Passage**

While optical computing (calculating with light) is promising, optical *interconnects* (communicating with light) are the immediate revolution required for AGI. **Lightmatter's Passage**, unveiled as a 3D photonic superchip in 2025, represents a paradigm shift from "chips connected by wires" to "chips floating on a sea of light".23

#### **3.1.1. The Reticle Limit and 3D Photonic Interposers**

Moore's Law is constrained by the "reticle limit"—the maximum size of a chip that can be printed by a lithography machine (roughly $800 \\text{mm}^2$). To build bigger systems, we must connect multiple chips. However, copper wires have high resistance and limited bandwidth density.

**Passage** is not a processor but a "smart substrate" or interposer. It allows heterogeneous chips (GPUs, CPUs, HBM) to be mounted directly onto a wafer-scale optical mesh.24

* **Specs:** It supports **114 Tbps** of total optical bandwidth with **1024 SerDes** (Serializer/Deserializer) lanes per tile.23  
* **Mechanism:** It uses waveguides etched into silicon to route data at the speed of light. Because it uses light, there is negligible signal loss or heat generation over distance.  
* **Significance:** This breaks the reticle limit. Manufacturers can stitch together dozens of chiplets that communicate as if they were on the same die. This enables AGI-scale clusters (e.g., 1024 GPUs) to operate as a single logical unit with unified memory, which is essential for training trillion-parameter models that cannot fit on a single GPU.25

### **3.2. MicroLED Interconnects: Avicena LightBundle**

For "short-reach" applications—such as connecting a processor to a nearby memory bank—lasers are often too power-hungry and complex (requiring thermal stabilization). **Avicena's LightBundle** platform (2025) solves this by using **MicroLEDs**.26

* **Technology:** Unlike silicon photonics which splits a laser source, Avicena uses arrays of microscopic GaN LEDs. These are incoherent light sources, meaning they don't produce "speckle" noise and don't require precise temperature control.26  
* **Efficiency:** The system operates at **80 femtojoules per bit (fJ/bit)**, a staggering improvement over the picojoules required by electrical SerDes.27  
* **Application:** This technology is critical for **Disaggregated Memory** architectures. It allows AGI models to access petabytes of RAM located in separate server racks with latency comparable to local memory, effectively creating "infinite RAM" systems.28

### **3.3. Native Optical Computing: PACE and Q.ANT**

Beyond interconnects, specific mathematical operations are being offloaded to native optical processors that calculate using the physics of light interference.

* **Lightelligence PACE:** This processor uses an **Optical Multiply Accumulate (oMAC)** core. It encodes data into the intensity of light beams and interferes them in a Mach-Zehnder Interferometer mesh to perform matrix multiplication. It solves NP-hard problems (like Ising and Max-Cut) **800x faster** than GPUs.29 It integrates 12,000 photonic devices on a single chip using 3D packaging.29  
* **Q.ANT NPU 2:** Released late 2025, this processor uses **Lithium Niobate on Insulator (LNoI)** technology. LNoI is superior to silicon for photonics because it has a strong electro-optic effect (Pockels effect), allowing for extremely fast modulation of light signals. The NPU 2 performs native nonlinear mathematical operations for "physical AI" and simulation workloads, offering **30x energy efficiency gains** by replacing transistor logic with analog optical signal processing.30

**Table 1: Comparative Analysis of Interconnect Technologies**

| Metric | Electronic SerDes (Copper) | Avicena LightBundle (MicroLED) | Lightmatter Passage (Waveguides) |
| :---- | :---- | :---- | :---- |
| **Bandwidth Density** | \~100 Gbps/mm | \> 1 Tbps/mm | 114 Tbps (Total System) |
| **Energy Efficiency** | \~5-10 pJ/bit | 0.08 pJ/bit (80 fJ/bit) | \< 1 pJ/bit |
| **Reach** | \< 1 meter (high loss) | \~10 meters | Wafer-scale (inter-chiplet) |
| **Latency** | Low | Low (ns scale) | Speed of light (refractive index) |
| **Heat Generation** | High (Resistance) | Negligible | Negligible |

## ---

**4\. Neuromorphic and "Neurogenic" Substrates**

While silicon photonics addresses the bandwidth problem, it does not address the fundamental inefficiency of the Boolean logic used to simulate neural networks. Neuromorphic hardware aims to emulate the brain's sparsity and event-driven nature.

### **4.1. Digital Neuromorphic: Loihi 3 and Akida**

**Intel's Loihi 3**, projected for release in 2026, continues the evolution of Spiking Neural Networks (SNNs) implemented in digital silicon.

* **Event-Based Processing:** Unlike GPUs which process dense matrices (frames), Loihi processes "events" (spikes). If a pixel in a camera doesn't change, no computation is performed. This sparsity mimics the human retina.31  
* **Specs:** Loihi 3 is manufactured on a 4nm process, scaling to **8 million neurons per chip**.31 It targets "always-on" robotic agents that need to process sensory data with milliwatt power budgets, enabling autonomous agents that can run for weeks on a battery.  
* **BrainChip Akida 2.0:** This architecture bridges the gap between SNNs and Transformers. It supports **Vision Transformers (ViTs)** encoded as SNNs, allowing standard AI models to run in an ultra-low-power neuromorphic mode without retraining the model from scratch.32

### **4.2. Self-Assembling Circuits: Atomic Switch Networks (ASN)**

A radical direction gaining traction in 2025 is **"Neurogenic" Computing**—hardware that physically grows its own connections. **Atomic Switch Networks (ASN)** utilize self-organizing networks of silver nanowires.33

#### **4.2.1. The Physics of Self-Assembly**

When a voltage is applied across a dispersion of Ag nanowires coated in PVP (polyvinylpyrrolidone), the electric field drives $\\text{Ag}^+$ ions through the coating.

* If $V \> V\_{\\text{th}}$, a silver filament forms, creating a connection (Synapse ON).  
* If $V \< V\_{\\text{hold}}$, the filament dissolves (Synapse OFF).34

This creates a **memristive** behavior where the resistance $R(t)$ depends on the history of voltage $\\int V(t) dt$. The network structurally adapts to the signals flowing through it.

#### **4.2.2. Criticality and Reservoir Computing**

In a network of $10^9$ such junctions, the system self-organizes into a state of Criticality—a phase transition between order (static connections) and chaos (random firing). Research shows that information processing capabilities are maximized at this critical point.35  
These networks are used for Reservoir Computing. The complex, non-linear dynamics of the nanowire mesh "project" simple input data into a high-dimensional space, making it linearly separable. A simple readout layer can then classify complex time-series data using the physical dynamics of the mesh, achieving computation with almost zero algorithmic overhead.36

### **4.3. Wetware Computing: Organoid Intelligence (OI)**

Perhaps the most profound shift in 2024-2025 is the commercialization of **Wetware Computing**—using living biological neurons as computational units. This field, often termed Organoid Intelligence (OI), argues that silicon can never match the thermodynamic efficiency of biology.

#### **4.3.1. Cortical Labs CL-1: The First Biological Computer**

Cortical Labs launched the **CL-1**, the first commercial biological computer.37

* **Architecture:** It cultivates human cortical neurons on a high-density Multi-Electrode Array (MEA) within a hermetically sealed life-support enclosure.  
* **Capabilities:** These neurons operate in a closed-loop system. The chip sends electrical signals (sensory input) to the neurons and records their spike trains (motor output). In famous experiments, these organoids learned to play **Pong**. The system uses a "Free Energy Principle" approach: the neurons spontaneously restructure to minimize the "surprise" or unpredictability of the feedback signal, effectively learning to control the paddle to create predictable outcomes.38  
* **Efficiency:** Biological neurons are estimated to be **$10^6$ times more energy-efficient** than silicon transistors for learning tasks.39

#### **4.3.2. FinalSpark Neuroplatform**

FinalSpark has introduced **"Wetware-as-a-Service,"** providing remote access to brain organoids via a Python API.40

* **Infrastructure:** The platform maintains spherical brain organoids (3D cultures) with microfluidic systems delivering nutrients and neurotransmitters (dopamine) to modulate learning. This mimics the brain's reward system.41  
* **Significance:** This allows researchers to experiment with biological plasticity and learning rules (STDP \- Spike Timing Dependent Plasticity) that are currently impossible to simulate accurately in silicon. It represents a step toward **Synthetic Biological Intelligence (SBI)**, where computing power is grown, not built.42

## ---

**5\. Agentic Architectures and Automated Science**

AGI is not just a model; it is an agent acting in an environment. The 2024-2025 period saw the standardization of protocols that allow these disparate software and hardware innovations to function as coherent entities.

### **5.1. Science Context Protocol (SCP)**

The **Science Context Protocol (SCP)** emerged as an open standard to connect autonomous agents with scientific tools (wet labs, simulation software, electron microscopes).43

* **Problem:** Previous agents were siloed. An AI designing a drug could not easily talk to the robot synthesizing it.  
* **Solution:** SCP creates a "global web" of scientific agents. It defines a schema where a resource (e.g., a DNA sequencer) publishes its capabilities. An agent can "discover" the tool, understand its input/output requirements, and execute experiments without human intervention.  
* **Architecture:** It uses a central **Hub** for service discovery and distributed **Servers** for execution. This enables "dry" (computational) and "wet" (physical) experiments to be orchestrated by AI in a unified loop, effectively automating the scientific method.45

### **5.2. Recursive Introspection and Self-Correction**

Reliability is the primary barrier to agent deployment. "Hallucination" in an AGI agent translates to dangerous or costly errors. New techniques like **Recursive Introspection (RISE)** train models to self-correct by generating their own feedback loops.46

* **Flow Engineering:** We are moving from "Prompt Engineering" (optimizing the input) to "Flow Engineering" (optimizing the process). This involves multi-agent systems where one agent (the Actor) generates a plan, and another agent (the Critic) verifies it using external tools (RAG, calculators, formal logic verifiers) before execution.47  
* **Self-Rewarding Models:** Models are now being trained to act as their own reward models, evaluating the quality of their own outputs during training. This creates a virtuous cycle of self-improvement that reduces dependence on expensive human-labeled data.46

## ---

**6\. Strategic Conclusions and Future Outlook**

The convergence of these technologies points to a specific roadmap for AGI in 2026 and beyond. We are moving away from the monolithic "Chatbot" paradigm toward **Hybrid Neuro-Symbolic Agents**.

1. **Software Bifurcation:** The era of "train once, run everywhere" is ending. AGI requires **Test-Time Training** and **Discrete Diffusion** planning. This blurs the line between training and inference. The computational cost of inference will skyrocket as models "think" (optimize) before they act.  
2. **The Planetary Computer:** To support this increased inference compute, **optical interconnects (Lightmatter)** are essential. They will allow data centers to function as single, coherent planetary-scale computers, overcoming the bandwidth bottlenecks that currently strand GPU capacity.  
3. **Substrate Specialization:** For edge intelligence and autonomous robotics, silicon is too power-hungry. **Neuromorphic (Loihi)** and **Wetware (Cortical Labs)** systems offer a pathway to intelligence that operates on watts rather than megawatts. We will likely see **Heterogeneous Compute Clusters** where a silicon photonics backbone (for knowledge retrieval) drives a wetware or neuromorphic cortex (for adaptation and learning).

**Implication:** The AGI of 2026 will not just be a smarter GPT-5. It will be a system that can reprogram its own weights on the fly (TTT), plan physically valid futures (JEPA), communicate internally at the speed of light (Photonics), and perhaps even grow its own connections (Organoid/ASN) to adapt to a changing world.

### **6.1. Timeline of Expected Maturation**

* **2025 (Late):** Widespread adoption of Test-Time Training in coding and math agents. Commercial deployment of first optical interconnects in AI clusters.  
* **2026:** Release of Loihi 3\. First "Hybrid" AI models combining LNNs for sensory processing and DiTs for reasoning.  
* **2027+:** Potential integration of wetware components in niche "black box" optimization tasks. Standardization of SCP for fully autonomous scientific labs.

**Table 2: Comparative Analysis of Reasoning Architectures**

| Feature | Autoregressive LLMs (GPT-4 class) | Discrete Diffusion (MGDM) | System 2 / TTT (ARChitects) | JEPA (World Models) |
| :---- | :---- | :---- | :---- | :---- |
| **Generation Mechanism** | Serial (Left-to-Right) | Parallel (Iterative Refinement) | Adaptive (Weights update at test time) | Non-Generative (Latent Prediction) |
| **Planning Capability** | Low (Greedy token choice) | High (Global constraint satisfaction) | High (Search-based adaptation) | High (Hierarchical state planning) |
| **Subgoal Handling** | Poor (Subgoal imbalance) | Excellent (Weighted loss) | Good (Via latent search) | N/A (Predicts states, not tokens) |
| **Inference Cost** | Linear with length | Constant or Iterative | High (Requires optimization steps) | Low (Representation only) |
| **Primary Use Case** | Text/Code Generation | Logic/Math/Routing | Novel Puzzle Solving (ARC) | Robotics/Video Understanding |

#### **Works cited**

1. arXiv:2412.04604v2 \[cs.AI\] 8 Jan 2025, accessed January 2, 2026, [https://arxiv.org/pdf/2412.04604](https://arxiv.org/pdf/2412.04604)  
2. ARC Prize 2024: Technical Report \- arXiv, accessed January 2, 2026, [https://arxiv.org/html/2412.04604v2](https://arxiv.org/html/2412.04604v2)  
3. ARC Prize 2024 Winners & Technical Report Published, accessed January 2, 2026, [https://arcprize.org/blog/arc-prize-2024-winners-technical-report](https://arcprize.org/blog/arc-prize-2024-winners-technical-report)  
4. The Surprising Effectiveness of Test-Time Training for Abstract Reasoning \- arXiv, accessed January 2, 2026, [https://arxiv.org/html/2411.07279v1](https://arxiv.org/html/2411.07279v1)  
5. The ARChitects \- Technical Report, accessed January 2, 2026, [https://lambdalabsml.github.io/ARC2025\_Solution\_by\_the\_ARChitects/](https://lambdalabsml.github.io/ARC2025_Solution_by_the_ARChitects/)  
6. ARC Prize 2024: Technical Report, accessed January 2, 2026, [https://arcprize.org/media/arc-prize-2024-technical-report.pdf](https://arcprize.org/media/arc-prize-2024-technical-report.pdf)  
7. How to beat ARC-AGI-2 \- lewish.io, accessed January 2, 2026, [https://lewish.io/posts/how-to-beat-arc-agi-2](https://lewish.io/posts/how-to-beat-arc-agi-2)  
8. Beyond Autoregression: Discrete Diffusion for Complex Reasoning and Planning \- arXiv, accessed January 2, 2026, [https://arxiv.org/html/2410.14157v3](https://arxiv.org/html/2410.14157v3)  
9. Diffusion-Based Reasoning \- Emergent Mind, accessed January 2, 2026, [https://www.emergentmind.com/topics/diffusion-based-reasoning](https://www.emergentmind.com/topics/diffusion-based-reasoning)  
10. Beyond Autoregression: Discrete Diffusion for Complex Reasoning and Planning \- Reddit, accessed January 2, 2026, [https://www.reddit.com/r/newAIParadigms/comments/1k9caoo/beyond\_autoregression\_discrete\_diffusion\_for/](https://www.reddit.com/r/newAIParadigms/comments/1k9caoo/beyond_autoregression_discrete_diffusion_for/)  
11. BEYOND AUTOREGRESSION: DISCRETE DIFFUSION FOR COMPLEX REASONING AND PLANNING \- ICLR Proceedings, accessed January 2, 2026, [https://proceedings.iclr.cc/paper\_files/paper/2025/file/c1b3d1e2cf53bb28cabd801bd58b3521-Paper-Conference.pdf](https://proceedings.iclr.cc/paper_files/paper/2025/file/c1b3d1e2cf53bb28cabd801bd58b3521-Paper-Conference.pdf)  
12. \[2410.14157\] Beyond Autoregression: Discrete Diffusion for Complex Reasoning and Planning \- arXiv, accessed January 2, 2026, [https://arxiv.org/abs/2410.14157](https://arxiv.org/abs/2410.14157)  
13. Deep Dive into Yann LeCun's JEPA | Rohit Bandaru, accessed January 2, 2026, [https://rohitbandaru.github.io/blog/JEPA-Deep-Dive/](https://rohitbandaru.github.io/blog/JEPA-Deep-Dive/)  
14. V-JEPA 2: Self-Supervised Video Models Enable Understanding, Prediction and Planning, accessed January 2, 2026, [https://arxiv.org/html/2506.09985v1](https://arxiv.org/html/2506.09985v1)  
15. Yann LeCun | Self-Supervised Learning, JEPA, World Models, and the future of AI, accessed January 2, 2026, [https://www.youtube.com/watch?v=yUmDRxV0krg](https://www.youtube.com/watch?v=yUmDRxV0krg)  
16. Liquid AI: Build efficient general-purpose AI at every scale., accessed January 2, 2026, [https://www.liquid.ai/](https://www.liquid.ai/)  
17. “Liquid” machine-learning system adapts to changing conditions | MIT News, accessed January 2, 2026, [https://news.mit.edu/2021/machine-learning-adapts-0128](https://news.mit.edu/2021/machine-learning-adapts-0128)  
18. Liquid Foundation Models: Our First Series of Generative AI Models, accessed January 2, 2026, [https://www.liquid.ai/blog/liquid-foundation-models-our-first-series-of-generative-ai-models](https://www.liquid.ai/blog/liquid-foundation-models-our-first-series-of-generative-ai-models)  
19. New method significantly reduces AI energy consumption \- TUM, accessed January 2, 2026, [https://www.tum.de/en/news-and-events/all-news/press-releases/details/new-method-significantly-reduces-ai-energy-consumption](https://www.tum.de/en/news-and-events/all-news/press-releases/details/new-method-significantly-reduces-ai-energy-consumption)  
20. ADDITION IS ALL YOU NEED FOR ENERGY-EFFICIENT LANGUAGE MODELS \- OpenReview, accessed January 2, 2026, [https://openreview.net/pdf?id=nXV3C8aKxZ](https://openreview.net/pdf?id=nXV3C8aKxZ)  
21. L-Mul: The Breakthrough Algorithm for Energy-Efficient AI \- Spheron's Blog, accessed January 2, 2026, [https://blog.spheron.network/l-mul-the-breakthrough-algorithm-for-energy-efficient-ai](https://blog.spheron.network/l-mul-the-breakthrough-algorithm-for-energy-efficient-ai)  
22. Researchers run high-performing large language model on the energy needed to power a lightbulb \- UC Santa Cruz \- News, accessed January 2, 2026, [https://news.ucsc.edu/2024/06/matmul-free-llm/](https://news.ucsc.edu/2024/06/matmul-free-llm/)  
23. Lightmatter Unveils Passage M1000 Photonic Superchip, World's Fastest AI Interconnect, accessed January 2, 2026, [https://lightmatter.co/press-release/lightmatter-unveils-passage-m1000-photonic-superchip-worlds-fastest-ai-interconnect/](https://lightmatter.co/press-release/lightmatter-unveils-passage-m1000-photonic-superchip-worlds-fastest-ai-interconnect/)  
24. Lightmatter uses light signals inside a processor's package \- Yole Group, accessed January 2, 2026, [https://www.yolegroup.com/industry-news/lightmatter-uses-light-signals-inside-a-processors-package/](https://www.yolegroup.com/industry-news/lightmatter-uses-light-signals-inside-a-processors-package/)  
25. Passage M1000 \- Lightmatter, accessed January 2, 2026, [https://lightmatter.co/wp-content/uploads/2025/08/57-lightmatter\_hotchips\_2025\_final.pdf](https://lightmatter.co/wp-content/uploads/2025/08/57-lightmatter_hotchips_2025_final.pdf)  
26. Avicena's LightBundle optical links operating at 4Gbps per lane with transmitter current as low as 100µA per LED \- Semiconductor Today, accessed January 2, 2026, [https://www.semiconductor-today.com/news\_items/2025/dec/avicena-011225.shtml](https://www.semiconductor-today.com/news_items/2025/dec/avicena-011225.shtml)  
27. Avicena Advances microLED and Photo Detector Arrays to Enable the World's Lowest-Power AI Scale-up Optical Interconnects, accessed January 2, 2026, [https://avicena.tech/avicena-advances-microled-and-photo-detector-arrays-to-enable-the-worlds-lowest-power-ai-scale-up-optical-interconnects/](https://avicena.tech/avicena-advances-microled-and-photo-detector-arrays-to-enable-the-worlds-lowest-power-ai-scale-up-optical-interconnects/)  
28. Avicena Announces Modular LightBundle™ Optical Interconnect Platform with \> 1Tbps/mm I/O density and \< 1pJ/bit, accessed January 2, 2026, [https://avicena.tech/avicena-announces-modular-lightbundle-optical-interconnect-platform-with-1tbps-mm-i-o-density-and-1pj-bit/](https://avicena.tech/avicena-announces-modular-lightbundle-optical-interconnect-platform-with-1tbps-mm-i-o-density-and-1pj-bit/)  
29. PACE \- Products-Lightelligence, accessed January 2, 2026, [https://www.lightelligence.ai/index.php/product/index/2.html](https://www.lightelligence.ai/index.php/product/index/2.html)  
30. Q.ANT Unveils its Second-Generation Photonic Processor to Power the Next Wave of AI and HPC, accessed January 2, 2026, [https://qant.com/press-releases/q-ant-unveils-its-second-generation-photonic-processor-to-power-the-next-wave-of-ai-and-hpc/](https://qant.com/press-releases/q-ant-unveils-its-second-generation-photonic-processor-to-power-the-next-wave-of-ai-and-hpc/)  
31. Intel Loihi 3 Released Q1 2026 : r/intelstock \- Reddit, accessed January 2, 2026, [https://www.reddit.com/r/intelstock/comments/1q0dk8d/intel\_loihi\_3\_released\_q1\_2026/](https://www.reddit.com/r/intelstock/comments/1q0dk8d/intel_loihi_3_released_q1_2026/)  
32. Top Neuromorphic Chips in 2025 : BrainChip Akida, Intel Loihi & IBM TrueNorth \- ElProCus, accessed January 2, 2026, [https://www.elprocus.com/top-neuromorphic-chips-in-2025/](https://www.elprocus.com/top-neuromorphic-chips-in-2025/)  
33. Avalanches and edge-of-chaos learning in neuromorphic nanowire networks \- PMC \- NIH, accessed January 2, 2026, [https://pmc.ncbi.nlm.nih.gov/articles/PMC8242064/](https://pmc.ncbi.nlm.nih.gov/articles/PMC8242064/)  
34. arXiv:2501.16886v1 \[cond-mat.mtrl-sci\] 28 Jan 2025, accessed January 2, 2026, [https://arxiv.org/pdf/2501.16886](https://arxiv.org/pdf/2501.16886)  
35. A Brain Built From Atomic Switches Can Learn \- Quanta Magazine, accessed January 2, 2026, [https://www.quantamagazine.org/a-brain-built-from-atomic-switches-can-learn-20170920/](https://www.quantamagazine.org/a-brain-built-from-atomic-switches-can-learn-20170920/)  
36. Atomic scale switch networks fabricated using (a) self-assembled... \- ResearchGate, accessed January 2, 2026, [https://www.researchgate.net/figure/Atomic-scale-switch-networks-fabricated-using-a-self-assembled-nanoparticles-and-b\_fig11\_359952157](https://www.researchgate.net/figure/Atomic-scale-switch-networks-fabricated-using-a-self-assembled-nanoparticles-and-b_fig11_359952157)  
37. World's first "Synthetic Biological Intelligence" runs on living human cells \- New Atlas, accessed January 2, 2026, [https://newatlas.com/brain/cortical-bioengineered-intelligence/](https://newatlas.com/brain/cortical-bioengineered-intelligence/)  
38. Cortical Labs, accessed January 2, 2026, [https://corticallabs.com/](https://corticallabs.com/)  
39. The Wetware Frontier: When Our Computers Are Literally Alive \- Impact Lab, accessed January 2, 2026, [https://www.impactlab.com/2025/10/18/the-wetware-frontier-when-our-computers-are-literally-alive/](https://www.impactlab.com/2025/10/18/the-wetware-frontier-when-our-computers-are-literally-alive/)  
40. Neuroplatform \- FinalSpark, accessed January 2, 2026, [https://finalspark.com/neuroplatform/](https://finalspark.com/neuroplatform/)  
41. Unconventional Computing \- FinalSpark, accessed January 2, 2026, [https://finalspark.com/unconventional-computing/](https://finalspark.com/unconventional-computing/)  
42. Wetware as a Service (WaaS): The Dawn of Synthetic Biological Intelligence, accessed January 2, 2026, [https://anshadameenza.com/blog/technology/wetware-as-service-synthetic-biological-intelligence/](https://anshadameenza.com/blog/technology/wetware-as-service-synthetic-biological-intelligence/)  
43. Artificial Intelligence \- arXiv, accessed January 2, 2026, [https://arxiv.org/list/cs.AI/new](https://arxiv.org/list/cs.AI/new)  
44. InternScience/scp \- GitHub, accessed January 2, 2026, [https://github.com/InternScience/scp](https://github.com/InternScience/scp)  
45. SCP: Accelerating Discovery with a Global Web of Autonomous Scientific Agents \- arXiv, accessed January 2, 2026, [https://arxiv.org/html/2512.24189v1](https://arxiv.org/html/2512.24189v1)  
46. Better Ways to Build Self-Improving AI Agents \- Yohei Nakajima, accessed January 2, 2026, [https://yoheinakajima.com/better-ways-to-build-self-improving-ai-agents/](https://yoheinakajima.com/better-ways-to-build-self-improving-ai-agents/)  
47. Self-Evaluation in AI Agents Through Chain of Thought and Reflection \- Galileo AI, accessed January 2, 2026, [https://galileo.ai/blog/self-evaluation-ai-agents-performance-reasoning-reflection](https://galileo.ai/blog/self-evaluation-ai-agents-performance-reasoning-reflection)