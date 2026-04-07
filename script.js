// Centralized contact values pulled from <body data-*>.
const body = document.body;
const phoneNumber = body.dataset.phone || "+919999999999";
const whatsappNumber = body.dataset.wa || "919999999999";

const siteHeader = document.querySelector(".site-header");
const brandLogo = document.querySelector(".brand-logo");
const mobileMenuToggle = document.getElementById("mobileMenuToggle");
const primaryMenu = document.getElementById("primaryMenu");
const navLinks = Array.from(document.querySelectorAll(".nav-menu a"));
const backToTopButton = document.getElementById("backToTop");
const leadForm = document.getElementById("leadForm");
const currentYear = document.getElementById("currentYear");
const langEnButton = document.getElementById("langEn");
const langTeButton = document.getElementById("langTe");
const serviceCards = Array.from(document.querySelectorAll('#services .service-card[data-service-index]'));
const serviceDetail = document.getElementById("serviceDetail");
const serviceDetailBackBtn = document.getElementById("serviceDetailBackBtn");
const serviceDetailPrevBtn = document.getElementById("serviceDetailPrevBtn");
const serviceDetailNextBtn = document.getElementById("serviceDetailNextBtn");
const serviceDetailTitle = document.getElementById("serviceDetailTitle");
const serviceDetailSummary = document.getElementById("serviceDetailSummary");
const serviceDetailContent = document.getElementById("serviceDetailContent");
const serviceDetailNote = document.getElementById("serviceDetailNote");
const benefitCards = Array.from(document.querySelectorAll('#benefits .benefit-card[data-benefit-index]'));
const benefitDetail = document.getElementById("benefitDetail");
const benefitDetailBackBtn = document.getElementById("benefitDetailBackBtn");
const benefitDetailPrevBtn = document.getElementById("benefitDetailPrevBtn");
const benefitDetailNextBtn = document.getElementById("benefitDetailNextBtn");
const benefitDetailTitle = document.getElementById("benefitDetailTitle");
const benefitDetailSummary = document.getElementById("benefitDetailSummary");
const benefitDetailContent = document.getElementById("benefitDetailContent");
const benefitDetailNote = document.getElementById("benefitDetailNote");
const chooseFeatureCards = Array.from(document.querySelectorAll('.choose-section .feature-card[data-choose-index]'));
const chooseDetail = document.getElementById("chooseDetail");
const chooseDetailBackBtn = document.getElementById("chooseDetailBackBtn");
const chooseDetailPrevBtn = document.getElementById("chooseDetailPrevBtn");
const chooseDetailNextBtn = document.getElementById("chooseDetailNextBtn");
const chooseDetailTitle = document.getElementById("chooseDetailTitle");
const chooseDetailSummary = document.getElementById("chooseDetailSummary");
const chooseDetailContent = document.getElementById("chooseDetailContent");
const chooseDetailNote = document.getElementById("chooseDetailNote");
const childPlanTrigger = document.querySelector('.premium-card[data-plan="child"]');
const childPlansDetail = document.getElementById("childPlansDetail");
const childPlansBackBtn = document.getElementById("childPlansBackBtn");
const childPlanCards = Array.from(document.querySelectorAll("#childPlansDetail .child-plan-card"));
const childPlanPage = document.getElementById("childPlanPage");
const childPlanPageBackBtn = document.getElementById("childPlanPageBackBtn");
const childPlanPrevBtn = document.getElementById("childPlanPrevBtn");
const childPlanNextBtn = document.getElementById("childPlanNextBtn");
const childPlanPageTitle = document.getElementById("childPlanPageTitle");
const childPlanPageSummary = document.getElementById("childPlanPageSummary");
const childPlanPageContent = document.getElementById("childPlanPageContent");
const childPlanPageNote = document.getElementById("childPlanPageNote");
const childPlanWebsiteLabel = document.getElementById("childPlanWebsiteLabel");
const childPlanAskBtn = document.getElementById("childPlanAskBtn");
const endowmentPlanTrigger = document.querySelector('.premium-card[data-plan="endowment"]');
const endowmentPlansDetail = document.getElementById("endowmentPlansDetail");
const endowmentPlansBackBtn = document.getElementById("endowmentPlansBackBtn");
const endowmentPlanCards = Array.from(document.querySelectorAll("#endowmentPlansDetail .endowment-plan-card"));
const endowmentPlanPage = document.getElementById("endowmentPlanPage");
const endowmentPlanPageBackBtn = document.getElementById("endowmentPlanPageBackBtn");
const endowmentPlanPrevBtn = document.getElementById("endowmentPlanPrevBtn");
const endowmentPlanNextBtn = document.getElementById("endowmentPlanNextBtn");
const endowmentPlanPageTitle = document.getElementById("endowmentPlanPageTitle");
const endowmentPlanPageSummary = document.getElementById("endowmentPlanPageSummary");
const endowmentPlanPageContent = document.getElementById("endowmentPlanPageContent");
const endowmentPlanPageNote = document.getElementById("endowmentPlanPageNote");
const endowmentPlanWebsiteLabel = document.getElementById("endowmentPlanWebsiteLabel");
const endowmentPlanAskBtn = document.getElementById("endowmentPlanAskBtn");
const endowmentPlansTitle = document.getElementById("endowmentPlansTitle");
const endowmentPlansSubtitle = document.getElementById("endowmentPlansSubtitle");
const pensionPlanTrigger = document.querySelector('.premium-card[data-plan="pension"]');
const pensionPlansDetail = document.getElementById("pensionPlansDetail");
const pensionPlansBackBtn = document.getElementById("pensionPlansBackBtn");
const pensionPlanCards = Array.from(document.querySelectorAll('#pensionPlansDetail [data-pension-plan-index]'));
const pensionPlanPage = document.getElementById("pensionPlanPage");
const pensionPlanPageBackBtn = document.getElementById("pensionPlanPageBackBtn");
const pensionPlanPrevBtn = document.getElementById("pensionPlanPrevBtn");
const pensionPlanNextBtn = document.getElementById("pensionPlanNextBtn");
const pensionPlanPageTitle = document.getElementById("pensionPlanPageTitle");
const pensionPlanPageSummary = document.getElementById("pensionPlanPageSummary");
const pensionPlanPageContent = document.getElementById("pensionPlanPageContent");
const pensionPlanPageNote = document.getElementById("pensionPlanPageNote");
const pensionPlanWebsiteLabel = document.getElementById("pensionPlanWebsiteLabel");
const pensionPlanAskBtn = document.getElementById("pensionPlanAskBtn");
const pensionPlansTitle = document.getElementById("pensionPlansTitle");
const pensionPlansSubtitle = document.getElementById("pensionPlansSubtitle");
const moneyBackPlanTrigger = document.querySelector('.premium-card[data-plan="moneyback"]');
const moneyBackPlansDetail = document.getElementById("moneyBackPlansDetail");
const moneyBackPlansBackBtn = document.getElementById("moneyBackPlansBackBtn");
const moneyBackPlanCards = Array.from(document.querySelectorAll('#moneyBackPlansDetail [data-moneyback-plan-index]'));
const moneyBackPlanPage = document.getElementById("moneyBackPlanPage");
const moneyBackPlanPageBackBtn = document.getElementById("moneyBackPlanPageBackBtn");
const moneyBackPlanPrevBtn = document.getElementById("moneyBackPlanPrevBtn");
const moneyBackPlanNextBtn = document.getElementById("moneyBackPlanNextBtn");
const moneyBackPlanPageTitle = document.getElementById("moneyBackPlanPageTitle");
const moneyBackPlanPageSummary = document.getElementById("moneyBackPlanPageSummary");
const moneyBackPlanPageContent = document.getElementById("moneyBackPlanPageContent");
const moneyBackPlanPageNote = document.getElementById("moneyBackPlanPageNote");
const moneyBackPlanWebsiteLabel = document.getElementById("moneyBackPlanWebsiteLabel");
const moneyBackPlanAskBtn = document.getElementById("moneyBackPlanAskBtn");
const moneyBackPlansTitle = document.getElementById("moneyBackPlansTitle");
const moneyBackPlansSubtitle = document.getElementById("moneyBackPlansSubtitle");
const wholeLifePlanTrigger = document.querySelector('.premium-card[data-plan="wholelife"]');
const wholeLifePlansDetail = document.getElementById("wholeLifePlansDetail");
const wholeLifePlansBackBtn = document.getElementById("wholeLifePlansBackBtn");
const wholeLifePlanCards = Array.from(document.querySelectorAll('#wholeLifePlansDetail [data-wholelife-plan-index]'));
const wholeLifePlanPage = document.getElementById("wholeLifePlanPage");
const wholeLifePlanPageBackBtn = document.getElementById("wholeLifePlanPageBackBtn");
const wholeLifePlanPrevBtn = document.getElementById("wholeLifePlanPrevBtn");
const wholeLifePlanNextBtn = document.getElementById("wholeLifePlanNextBtn");
const wholeLifePlanPageTitle = document.getElementById("wholeLifePlanPageTitle");
const wholeLifePlanPageSummary = document.getElementById("wholeLifePlanPageSummary");
const wholeLifePlanPageContent = document.getElementById("wholeLifePlanPageContent");
const wholeLifePlanPageNote = document.getElementById("wholeLifePlanPageNote");
const wholeLifePlanWebsiteLabel = document.getElementById("wholeLifePlanWebsiteLabel");
const wholeLifePlanAskBtn = document.getElementById("wholeLifePlanAskBtn");
const wholeLifePlansTitle = document.getElementById("wholeLifePlansTitle");
const wholeLifePlansSubtitle = document.getElementById("wholeLifePlansSubtitle");
const termPlanTrigger = document.querySelector('.premium-card[data-plan="term"]');
const termPlansDetail = document.getElementById("termPlansDetail");
const termPlansBackBtn = document.getElementById("termPlansBackBtn");
const termPlanCards = Array.from(document.querySelectorAll('#termPlansDetail [data-term-plan-index]'));
const termPlanPage = document.getElementById("termPlanPage");
const termPlanPageBackBtn = document.getElementById("termPlanPageBackBtn");
const termPlanPrevBtn = document.getElementById("termPlanPrevBtn");
const termPlanNextBtn = document.getElementById("termPlanNextBtn");
const termPlanPageTitle = document.getElementById("termPlanPageTitle");
const termPlanPageSummary = document.getElementById("termPlanPageSummary");
const termPlanPageContent = document.getElementById("termPlanPageContent");
const termPlanPageNote = document.getElementById("termPlanPageNote");
const termPlanWebsiteLabel = document.getElementById("termPlanWebsiteLabel");
const termPlanAskBtn = document.getElementById("termPlanAskBtn");
const termPlansTitle = document.getElementById("termPlansTitle");
const termPlansSubtitle = document.getElementById("termPlansSubtitle");
const ulipPlanTrigger = document.querySelector('.premium-card[data-plan="ulip"]');
const ulipPlansDetail = document.getElementById("ulipPlansDetail");
const ulipPlansBackBtn = document.getElementById("ulipPlansBackBtn");
const ulipPlanCards = Array.from(document.querySelectorAll('#ulipPlansDetail [data-ulip-plan-index]'));
const ulipPlanPage = document.getElementById("ulipPlanPage");
const ulipPlanPageBackBtn = document.getElementById("ulipPlanPageBackBtn");
const ulipPlanPrevBtn = document.getElementById("ulipPlanPrevBtn");
const ulipPlanNextBtn = document.getElementById("ulipPlanNextBtn");
const ulipPlanPageTitle = document.getElementById("ulipPlanPageTitle");
const ulipPlanPageSummary = document.getElementById("ulipPlanPageSummary");
const ulipPlanPageContent = document.getElementById("ulipPlanPageContent");
const ulipPlanPageNote = document.getElementById("ulipPlanPageNote");
const ulipPlanWebsiteLabel = document.getElementById("ulipPlanWebsiteLabel");
const ulipPlanAskBtn = document.getElementById("ulipPlanAskBtn");
const ulipPlansTitle = document.getElementById("ulipPlansTitle");
const ulipPlansSubtitle = document.getElementById("ulipPlansSubtitle");
const microPlanTrigger = document.querySelector('.premium-card[data-plan="micro"]');
const microPlansDetail = document.getElementById("microPlansDetail");
const microPlansBackBtn = document.getElementById("microPlansBackBtn");
const microPlanCards = Array.from(document.querySelectorAll('#microPlansDetail [data-micro-plan-index]'));
const microPlanPage = document.getElementById("microPlanPage");
const microPlanPageBackBtn = document.getElementById("microPlanPageBackBtn");
const microPlanPrevBtn = document.getElementById("microPlanPrevBtn");
const microPlanNextBtn = document.getElementById("microPlanNextBtn");
const microPlanPageTitle = document.getElementById("microPlanPageTitle");
const microPlanPageSummary = document.getElementById("microPlanPageSummary");
const microPlanPageContent = document.getElementById("microPlanPageContent");
const microPlanPageNote = document.getElementById("microPlanPageNote");
const microPlanWebsiteLabel = document.getElementById("microPlanWebsiteLabel");
const microPlanAskBtn = document.getElementById("microPlanAskBtn");
const microPlansTitle = document.getElementById("microPlansTitle");
const microPlansSubtitle = document.getElementById("microPlansSubtitle");

let currentLanguage = "en";
let activeServiceIndex = 0;
let activeBenefitIndex = 0;
let activeChooseIndex = 0;
let activeChildPlanIndex = 0;
let activeEndowmentPlanIndex = 0;
let activePensionPlanIndex = 0;
let activeMoneyBackPlanIndex = 0;
let activeWholeLifePlanIndex = 0;
let activeTermPlanIndex = 0;
let activeUlipPlanIndex = 0;
let activeMicroPlanIndex = 0;

const sectionIds = ["home", "about", "services", "plans", "benefits", "contact"];
const sections = sectionIds
	.map((id) => document.getElementById(id))
	.filter(Boolean);

if (currentYear) {
	currentYear.textContent = new Date().getFullYear();
}

const closeMobileMenu = () => {
	if (!primaryMenu || !mobileMenuToggle) {
		return;
	}

	primaryMenu.classList.remove("open");
	mobileMenuToggle.setAttribute("aria-expanded", "false");
};

const toggleMobileMenu = () => {
	if (!primaryMenu || !mobileMenuToggle) {
		return;
	}

	const isOpen = primaryMenu.classList.toggle("open");
	mobileMenuToggle.setAttribute("aria-expanded", String(isOpen));
};

const getHeaderOffset = () => (siteHeader ? siteHeader.offsetHeight + 8 : 80);

const smoothScrollTo = (targetElement) => {
	if (!targetElement) {
		return;
	}

	const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - getHeaderOffset();
	window.scrollTo({ top: Math.max(offsetTop, 0), behavior: "smooth" });
};

const updateHeaderAndBackToTopState = () => {
	const scrolled = window.scrollY > 20;
	if (siteHeader) {
		siteHeader.classList.toggle("scrolled", scrolled);
	}

	if (backToTopButton) {
		backToTopButton.classList.toggle("show", window.scrollY > 320);
	}

	updateActiveNavByScroll();
};

const setAllContactLinks = () => {
	const telLinks = document.querySelectorAll('a[href^="tel:"]');
	const waLinks = document.querySelectorAll('a[href*="wa.me"]');

	telLinks.forEach((link) => {
		link.setAttribute("href", `tel:${phoneNumber}`);
	});

	waLinks.forEach((link) => {
		link.setAttribute("href", `https://wa.me/${whatsappNumber}`);
	});
};

const setActiveNavLink = (sectionId) => {
	navLinks.forEach((link) => {
		const isActive = link.getAttribute("href") === `#${sectionId}`;
		link.classList.toggle("active", isActive);
	});
};

const updateActiveNavByScroll = () => {
	if (!sections.length) {
		return;
	}

	const marker = window.scrollY + getHeaderOffset() + 20;
	let activeSectionId = sections[0].id;

	sections.forEach((section) => {
		if (marker >= section.offsetTop) {
			activeSectionId = section.id;
		}
	});

	setActiveNavLink(activeSectionId);
};

const translations = {
	en: {
		nav: ["Home", "About", "Services", "Plans", "Benefits", "Contact"],
		whatsappNav: "WhatsApp",
		heroEyebrow: "Senior LIC Insurance Advisor",
		heroTitle: "Secure Your Family's Future with Trusted LIC & Health Insurance Guidance",
		heroName: "Nooka Santosh Kumar",
		heroSubtitle: "N N V Insurance Services | LIC Policy Services at Your Doorstep",
		heroIntro1:
			"From new policy planning to servicing and claims support, get practical, easy-to-understand advice tailored to your life stage, budget, and long-term goals.",
		heroIntro2: "You can contact confidently. Every discussion is handled with care, privacy, and honest recommendations.",
		heroButtons: ["Call Now", "WhatsApp Now", "View Services"],
		trustBadges: ["Senior LIC Advisor Support", "Family-Focused Guidance", "Prompt Service Updates"],
		aboutEyebrow: "About Advisor",
		aboutTitle: "Reliable Insurance Support for Every Stage of Life",
		aboutP1:
			"I am Nooka Santosh Kumar, Senior LIC Insurance Advisor at N N V Insurance Services. I help individuals and families choose the right LIC and health insurance solutions with transparent guidance, simple explanations, and dependable service support.",
		aboutP2:
			"Whether you are planning for child education, retirement, tax savings, or medical security, you receive personal attention from enquiry to policy servicing.",
		showcaseEyebrow: "Trusted Service Showcase",
		showcaseTitle: "Our Insurance Services Highlights",
		showcaseSubtitle:
			"A quick visual glimpse of policy support, customer guidance, and service-first commitment at N N V Insurance Services.",
		showcaseCards: [
			["Personal Policy Consultation", "Need-based recommendations for life and health coverage."],
			["Policy Servicing Support", "From updates to renewals, assistance at every stage."],
			["Family Financial Planning", "Protection-focused guidance for long-term household security."],
			["Claim & Maturity Assistance", "Clear process support for faster and stress-free documentation."],
			["Trusted Customer Relationships", "Friendly advisory service built on consistency and transparency."]
		],
		servicesEyebrow: "Core Services",
		servicesTitle: "End-to-End LIC Policy Services",
		serviceCards: [
			["Premium Payments", "Timely premium guidance through convenient official payment channels."],
			["Policy Revival / Surrender", "Clear support on revival options or surrender process with proper documentation."],
			["Name / Address Change", "Assistance to update personal details accurately in your policy records."],
			["Duplicate Policy Bond", "Step-by-step help to request and obtain duplicate bond documents."],
			["PAN Card Inclusion", "Support for PAN linking and compliance updates for smooth servicing."],
			["Loan on Policy", "Guidance on eligibility, process, and documentation for policy loans."],
			["Policy Transfer", "Assistance for transferring policy servicing to a preferred branch."],
			["Change of Nominee", "Nominee update support to keep your family protection current."],
			["Change of Payment Mode", "Help in changing premium frequency as per your cash-flow needs."],
			["Policy Enquiry", "Get clear answers on policy status, benefits, and due dates."],
			["NEFT Registration", "Enable NEFT details for faster claim and maturity payments."],
			["Premium Paid Certificate", "Quick help to get certificates for tax filing and records."],
			["Maturity / Death Claim Help", "Sensitive end-to-end support for timely and proper claim submission."]
		],
		serviceEmojis: ["💳", "🔄", "🪪", "📄", "🧾", "💰", "🔁", "👨‍👩‍👧", "📆", "🔎", "🏦", "📑", "🤝"],
		serviceDetailBack: "Back",
		serviceDetailNote: "End-to-end support is provided from document check to successful request completion.",
		serviceDetails: [
			{ summary: "Pay premiums correctly and on time through official channels.", points: ["Mode support: yearly, half-yearly, quarterly, monthly", "Payment reminders and due-date guidance", "Receipt verification and troubleshooting support"] },
			{ summary: "Clear guidance for policy revival or surrender decisions.", points: ["Lapse status and eligibility check", "Document list with charges explanation", "Submission flow until status confirmation"] },
			{ summary: "Update your personal details without processing confusion.", points: ["Correct form selection for name/address update", "KYC and proof checklist before submission", "Follow-up support until record update is completed"] },
			{ summary: "Assistance to request lost/missing policy bond copies.", points: ["Application and indemnity guidance", "Identity proof and policy details validation", "Tracking support till duplicate bond issue"] },
			{ summary: "PAN linking and compliance updates for policy servicing.", points: ["PAN seeding process support", "Data mismatch correction assistance", "Confirmation check after successful update"] },
			{ summary: "Know loan eligibility and process against policy value.", points: ["Surrender value and loan eligibility check", "Interest and repayment explanation", "Application support till loan release"] },
			{ summary: "Transfer your policy servicing branch smoothly.", points: ["Source and target branch request flow", "Required policyholder verification documents", "Post-transfer follow-up and service continuity"] },
			{ summary: "Keep nominee details updated for family security.", points: ["Nominee change request documentation", "Minor nominee and appointee guidance", "Status confirmation after policy endorsement"] },
			{ summary: "Change premium payment frequency based on cash flow.", points: ["Available mode options and impact details", "Policy eligibility for mode conversion", "Update request submission and confirmation support"] },
			{ summary: "Get practical answers on policy status and benefits.", points: ["Bonus, due-date, and policy status explanation", "Benefit clarification in simple language", "Guidance on next action based on status"] },
			{ summary: "Register bank details for faster electronic payouts.", points: ["NEFT form and bank proof checklist", "Name/account matching validation", "Verification follow-up before maturity/claim payout"] },
			{ summary: "Get premium paid certificates for tax and records.", points: ["Financial-year-wise certificate support", "Download and issuance route guidance", "Quick help for urgent filing timelines"] },
			{ summary: "Sensitive claim assistance during maturity or death claim.", points: ["Claim document checklist and sequencing", "Nominee support and submission guidance", "Follow-up till payout status update"] }
		],
		plansEyebrow: "LIC Plans",
		plansTitle: "LIC Plan Categories for Every Need",
		plansSubtitle: "Choose the category that best matches your family goals and financial stage.",
		planCards: [
			"Child Plans",
			"Endowment Plans",
			"Pension Plans",
			"Money Back Plans",
			"Whole Life Plans",
			"Term Insurance",
			"ULIP Plans",
			"Micro Insurance"
		],
		childPlansDetail: {
			back: "Back",
			title: "Child Future Plans",
			subtitle: "Click on a plan to know complete details.",
			cards: [
				["Amrit Bal (774)", "Fixed returns designed for your child's higher education future."],
				["Jeevan Tarun (734)", "Fixed returns designed for your child's higher education future."],
				["New Children Money Back (732)", "Fixed returns designed for your child's higher education future."]
			],
			pageBack: "Back",
			askButton: "Ask details on WhatsApp",
			websiteLabel: "LIC Official Website:",
			plans: [
				{
					title: "LIC Amrit Bal Policy (Plan No. 774)",
					summary: "Limited premium guaranteed addition plan designed for child's higher education.",
					sections: [
						["Age Eligibility", ["Minimum Age: 30 days", "Maximum Age: 13 years"]],
						["Policy Term", ["Between 10 to 25 years"]],
						["Premium Term", ["Only 5, 6, 7 years"]],
						["Sum Assured", ["Minimum: Rs. 2 Lakhs", "No upper limit"]],
						["Premium Payment", ["Single, Yearly, Half-Yearly, Quarterly, Monthly"]],
						["Maturity & Death Benefit", ["Maturity: SA + Guaranteed Additions", "Death: SA + Guaranteed Additions paid to nominee"]],
						["Other Details", ["Loan & Surrender available after 1 year", "Tax benefits: 80C and 10(10D) applicable"]]
					],
					note: "A strong option to combine protection and savings for child future needs."
				},
				{
					title: "LIC Jeevan Tarun (Plan No. 734)",
					summary: "Limited premium endowment plan designed for child higher education benefits.",
					sections: [
						["Age Eligibility", ["Minimum Age: 30 days", "Maximum Age: 12 years"]],
						["Policy & Premium Term", ["Policy Term = 25 - entry age", "Premium Term = 20 - entry age"]],
						["Sum Assured", ["Minimum: Rs. 2 Lakhs", "No upper limit"]],
						["Premium Payment", ["Yearly, Half-Yearly, Quarterly, Monthly (NACH)"]],
						["Grace / Loan / Surrender / Revival", ["Grace: 30 days", "Loan on surrender value after 1 year", "Surrender after 1 year", "Revival within 5 years"]],
						["Money Back Options", ["Option-1: Maturity 100% SA", "Option-2: 5% SA (20 to 24), Maturity 75%", "Option-3: 10% SA (20 to 24), Maturity 50%", "Option-4: 15% SA (20 to 24), Maturity 25%"]],
						["Benefits & Riders", ["Maturity: SA + Bonus + Final Bonus", "Death: Death SA + Bonus + Final Bonus", "Riders: AB Rider, AD&D Rider, Term Rider, Premium Waiver Rider", "Tax benefits: Sec 80C and 10(10D)"]]
					],
					note: "A trusted plan choice for child future education planning."
				},
				{
					title: "LIC New Children's Money Back (Plan No. 732)",
					summary: "Money back plan designed for child education and future financial needs.",
					sections: [
						["Age Eligibility", ["Minimum Age: 30 days", "Maximum Age: 12 years"]],
						["Policy Term", ["Policy Term = 25 - entry age"]],
						["Sum Assured", ["Minimum: Rs. 2 Lakhs", "No upper limit"]],
						["Premium Payment", ["Single, Yearly, Half-Yearly, Quarterly, Monthly"]],
						["Grace / Loan / Surrender / Revival", ["Grace: 30 days", "Loan on surrender value after 1 year", "Surrender after 1 year", "Revival within 5 years"]],
						["Money Back Schedule", ["Age 18: 20% SA", "Age 20: 20% SA", "Age 22: 20% SA", "Age 25: 40% SA + Bonus"]],
						["Benefits & Riders", ["Maturity: 40% SA + Bonus + Final Bonus", "Death: Death SA + Bonus + Final Bonus", "Riders: AB Rider, AD&D Rider, Term Rider, Premium Waiver Rider", "Tax benefits: Sec 80C and 10(10D)"]]
					],
					note: "A good money-back option for planned child future milestones."
				}
			]
		},
		endowmentPlansDetail: {
			back: "Back",
			title: "Endowment Plans",
			subtitle: "Click on a plan to know complete details.",
			cards: [
				["Jeevan Labh (736)", "Pay for fewer years and get strong long-term returns."],
				["New Endowment Plan (714)", "Best for safe savings with life cover and bonus potential."],
				["New Jeevan Anand (715)", "Best for safe savings with lifelong risk coverage support."],
				["Single Premium Endowment (717)", "One-time premium plan with future returns and protection."],
				["Jeevan Lakshya (733)", "Savings plus protection with limited premium payment term."],
				["LIC Bima Jyoti (760)", "Guaranteed additions with reliable savings and protection."],
				["LIC Bima Lakshmi (881)", "Limited premium endowment with savings and money-back support."]
			],
			pageBack: "Back",
			askButton: "Ask details on WhatsApp",
			websiteLabel: "LIC Official Website:",
			plans: [
				{
					title: "LIC Jeevan Labh (Plan No. 736)",
					summary: "A shorter premium paying endowment plan designed for higher long-term returns.",
					sections: [
						["Age Eligibility", ["Minimum Age: 8 years", "Maximum Age: 59 years"]],
						["Policy & Premium Term", ["16-year term with 10-year premium", "21-year term with 15-year premium", "25-year term with 16-year premium"]],
						["Sum Assured", ["Minimum: Rs. 2 Lakhs", "No upper limit"]],
						["Premium Payment", ["Yearly, Half-Yearly, Quarterly, Monthly (NACH)"]],
						["Other Information", ["Grace period: 30 days", "Loan after 1 year", "Surrender after 1 year", "Revival within 5 years"]],
						["Benefits", ["Maturity: Sum Assured + Bonus + FAB", "Death: Sum Assured on Death + Bonuses"]],
						["Riders & Tax", ["AB Rider, AD&D Rider, New Term Rider, Premium Waiver Rider", "Tax benefits under Sec 80C and 10(10D)"]]
					],
					note: "A highly preferred plan for salaried and middle-class long-term savings goals."
				},
				{
					title: "LIC New Endowment Plan (Plan No. 714)",
					summary: "Non-linked life insurance policy with guaranteed returns and bonus benefits.",
					sections: [
						["Age Eligibility", ["Minimum Age: 8 years", "Maximum Age: 50 years"]],
						["Policy Term", ["Minimum 12 years", "Maximum 35 years"]],
						["Sum Assured", ["Minimum: Rs. 2 Lakhs", "No upper limit"]],
						["Premium Payment", ["Yearly, Half-Yearly, Quarterly, Monthly (NACH)"]],
						["Loan / Surrender / Revival", ["Loan and surrender after 1 year", "Revival within 5 years"]],
						["Benefits", ["Maturity: Sum Assured + Reversionary Bonus + FAB", "Death: Sum Assured + Bonus + FAB"]],
						["Riders & Tax", ["AB Rider, AD&D Rider, New Term Rider, Premium Waiver Rider", "Tax benefits under Sec 80C and 10(10D)"]]
					],
					note: "A good choice for safe savings and family life cover."
				},
				{
					title: "LIC New Jeevan Anand (Plan No. 715)",
					summary: "Popular LIC policy combining endowment returns with whole-life protection.",
					sections: [
						["Age Eligibility", ["Minimum Age: 18 years", "Maximum Age: 50 years"]],
						["Policy Term", ["15 to 35 years"]],
						["Sum Assured", ["Minimum: Rs. 2 Lakhs", "No upper limit"]],
						["Premium Payment", ["Yearly, Half-Yearly, Quarterly, Monthly (NACH)"]],
						["Other Information", ["Grace period: 30 days", "Loan and surrender after 1 year", "Revival within 5 years"]],
						["Benefits", ["Maturity: SA + Bonus + FAB", "Whole-life cover continues after maturity", "Death: Death SA + Bonus"]],
						["Riders & Tax", ["AB Rider, AD&D Rider, New Term Rider", "Tax benefits under Sec 80C and 10(10D)"]]
					],
					note: "A very popular plan for savings plus lifelong risk cover."
				},
				{
					title: "LIC Single Premium Endowment (Plan No. 717)",
					summary: "One-time premium endowment plan for future returns and protection.",
					sections: [
						["Age Eligibility", ["Minimum Age: 30 days", "Maximum Age: 65 years"]],
						["Policy Term", ["10 to 25 years"]],
						["Sum Assured", ["Minimum: Rs. 1 Lakh", "No upper limit"]],
						["Premium Payment", ["Single premium only"]],
						["Rebate", ["Rebate available based on sum assured"]],
						["Benefits", ["Maturity: Bonus + Final Additional Bonus", "Death: Benefit payable with bonuses"]],
						["Riders & Tax", ["AD&D Rider, New Term Rider", "Tax benefits under Sec 80C and 10(10D)"]]
					],
					note: "A strong one-time investment option for future child goals."
				},
				{
					title: "LIC Jeevan Lakshya (Plan No. 733)",
					summary: "Limited premium plan combining savings and risk protection.",
					sections: [
						["Age Eligibility", ["Minimum Age: 18 years", "Maximum Age: 50 years"]],
						["Policy Term", ["13 to 25 years", "No premium for the last 3 years"]],
						["Sum Assured", ["Minimum: Rs. 2 Lakhs", "No upper limit"]],
						["Premium Payment", ["Yearly, Half-Yearly, Quarterly, Monthly (NACH)"]],
						["Other Details", ["Grace period: 30 days", "Loan and surrender after 1 year", "Revival within 5 years"]],
						["Benefits", ["Maturity: Sum Assured + Bonus + FAB", "Death: 10% SA every year and final SA + Bonus"]],
						["Riders & Tax", ["AB Rider, AD&D Rider, New Term Rider", "Tax benefits under Sec 80C and 10(10D)"]]
					],
					note: "One of the best plans for savings plus family protection goals."
				},
				{
					title: "LIC Bima Jyoti (Plan No. 760)",
					summary: "Limited premium endowment plan with guaranteed additions.",
					sections: [
						["Age Eligibility", ["Minimum Age: 0 years", "Maximum Age: 60 years"]],
						["Policy & Premium Term", ["Policy term: 15 to 20 years", "Premium term: policy term minus 5 years"]],
						["Sum Assured", ["Minimum: Rs. 1,25,000", "No upper limit"]],
						["Premium Payment", ["Yearly, Half-Yearly, Quarterly, Monthly (NACH)"]],
						["Other Information", ["Grace period: 30 days", "Loan and surrender after 1 year", "Revival within 5 years"]],
						["Benefits", ["Maturity: SA + Guaranteed Additions", "Guaranteed addition: Rs. 50 per Rs. 1000 SA per year", "Death: Death SA + Guaranteed Additions"]],
						["Riders & Tax", ["AB Rider, AD&D Rider, New Term Rider, Premium Waiver Rider", "Tax benefits under Sec 80C and 10(10D)"]]
					],
					note: "A suitable LIC plan for guaranteed return-oriented customers."
				},
				{
					title: "LIC Bima Lakshmi (Plan No. 881)",
					summary: "Limited premium endowment plan with savings plus money-back support.",
					sections: [
						["Age Eligibility", ["Minimum Age: 18 years", "Maximum Age: 50 years"]],
						["Policy & Premium Term", ["Policy term: 20 years", "Premium term: 7 to 15 years"]],
						["Sum Assured", ["Minimum: Rs. 2 Lakhs", "No upper limit"]],
						["Premium Payment", ["Yearly, Half-Yearly, Quarterly, Monthly (NACH)"]],
						["Money Back Benefit", ["A percentage of SA paid during policy term", "Balance amount + GA at maturity"]],
						["Other Information", ["Grace period: 30 days", "Loan and surrender after 2 years", "Revival within 5 years", "Rebate based on premium mode and sum assured"]],
						["Benefits", ["Maturity: Balance SA + GA", "Death: Full SA + GA"]],
						["Riders & Tax", ["AB Rider, AD&D Rider, New Term Rider, Premium Waiver Rider", "Tax benefits under Sec 80C and 10(10D)"]]
					],
					note: "Best suited for those who need savings with periodic money-back support."
				}
			]
		},
		pensionPlansDetail: {
			back: "Back",
			title: "Pension Plans",
			subtitle: "Click on a plan to know complete details.",
			cards: [
				["New Pension Plus (867)", "ULIP-based best pension plan."],
				["Jeevan Akshay-VII (857)", "Single premium pension plan with next month payouts."],
				["New Jeevan Shanti (758)", "Deferred annuity plan for future pension."],
				["Saral Pension (862)", "Standard immediate annuity plan."],
				["Smart Pension (879)", "Flexible pension plan for retirement."]
			],
			pageBack: "Back",
			askButton: "Ask details on WhatsApp",
			websiteLabel: "LIC Official Website:",
			plans: [
				{
					title: "LIC New Pension Plus (Plan No. 867)",
					summary: "Market-linked (ULIP) pension plan - best choice for building retirement fund.",
					sections: [
						["Age Eligibility", ["Minimum Age: 25 years", "Maximum Age: 75 years", "Vesting Age: 35 to 85 years"]],
						["Policy Term", ["10 to 42 years"]],
						["Premium Options", ["Single Premium", "Regular Premium (Yearly, Half-Yearly, Quarterly, Monthly)", "Minimum: Rs. 1,00,000 (Single)", "Rs. 3,000/month (Regular)"]],
						["Investment Funds", ["Pension Growth Fund", "Balanced Fund", "Bond Fund", "Secured Fund"]],
						["Guaranteed Additions", ["5% to 15.5% guaranteed additions on premium"]],
						["Partial Withdrawal", ["After 5-year lock-in", "Up to 25% of fund value can be withdrawn"]],
						["Death Benefit", ["Higher of unit fund value or 105% premiums paid"]],
						["Maturity (Vesting)", ["Up to 60% corpus can be commuted", "Remaining amount must be used to buy annuity"]],
						["Other Benefits", ["4 free fund switches per year", "Sec 80C and 10(10D) tax benefits"]]
					],
					note: "Best ULIP pension plan for those who want market-linked retirement corpus growth."
				},
				{
					title: "LIC Jeevan Akshay-VII (Plan No. 857)",
					summary: "One-time investment plan that gives guaranteed lifelong annuity income.",
					sections: [
						["Age Eligibility", ["Minimum Age: 25 years", "Maximum Age: 85 years"]],
						["Purchase Price", ["Minimum: Rs. 1,00,000", "No upper limit"]],
						["Annuity Frequency", ["Yearly", "Half-Yearly", "Quarterly", "Monthly", "Minimum monthly annuity: Rs. 1,000"]],
						["Annuity Options", ["Single Life Annuity", "Joint Life Annuity", "Return of Purchase Price option"]],
						["Rebates", ["Rebate based on purchase price"]],
						["Death Benefit", ["Paid to nominee as per selected annuity option"]]
					],
					note: "Best for retirees who need guaranteed pension income for life after retirement."
				},
				{
					title: "LIC New Jeevan Shanti (Plan No. 758)",
					summary: "Deferred annuity plan for starting lifelong pension after selected deferment period.",
					sections: [
						["Age Eligibility", ["Minimum Age: 30 years", "Maximum Age: 79 years"]],
						["Deferment Period", ["1 to 5 years"]],
						["Purchase Price", ["Minimum: Rs. 1,50,000", "No upper limit"]],
						["Annuity Frequency", ["Yearly", "Half-Yearly", "Quarterly", "Monthly", "Minimum monthly annuity: Rs. 1,000"]],
						["Loan and Surrender", ["Loan and surrender allowed after 3 months"]],
						["Rebates", ["Rebate based on purchase price"]],
						["Death Benefit and Options", ["Purchase price paid to nominee on death", "Single Life option", "Joint Life option"]]
					],
					note: "Best for people who want to plan now and start fixed pension after a short deferment."
				},
				{
					title: "LIC Saral Pension (Plan No. 862)",
					summary: "Simple immediate annuity pension plan that provides lifelong income.",
					sections: [
						["Age Eligibility", ["Minimum Age: 40 years", "Maximum Age: 80 years"]],
						["Purchase Price", ["Minimum: Rs. 1,00,000", "No upper limit"]],
						["Annuity Frequency", ["Yearly", "Half-Yearly", "Quarterly", "Monthly", "Minimum monthly annuity: Rs. 1,000"]],
						["Rebates", ["Rebate based on purchase price"]],
						["Death Benefit", ["Paid to nominee based on selected annuity option"]]
					],
					note: "Best for those who need a simple and stable pension income after retirement."
				},
				{
					title: "LIC Smart Pension (Plan No. 879)",
					summary: "Flexible pension plan designed to provide lifelong annuity income.",
					sections: [
						["Age Eligibility", ["Minimum Age: 18 years", "Maximum Age: 100 years"]],
						["Purchase Price", ["Minimum: Rs. 1,00,000", "No upper limit"]],
						["Annuity Frequency", ["Yearly", "Half-Yearly", "Quarterly", "Monthly", "Minimum monthly annuity: Rs. 1,000"]],
						["Loan Facility", ["Loan available after 3 months"]],
						["Rebates", ["Rebate based on purchase price"]],
						["Death Benefit", ["Paid to nominee as per selected option"]]
					],
					note: "A smart pension option for long-term guaranteed retirement income planning."
				}
			]
		},
		moneyBackPlansDetail: {
			back: "Back",
			title: "Money Back Plans",
			subtitle: "Click on a plan to know complete details.",
			cards: [
				["Bima Shree (748)", "Special money back plan for high sum assured needs."],
				["New Money Back 20 Years (720)", "Get payouts every 5 years in a 20-year term."],
				["New Money Back 25 Years (721)", "Periodic returns every 5 years in a 25-year term."],
				["Children Money Back (732)", "Timed payouts designed for child education needs."],
				["Jeevan Tarun (734)", "Structured payouts after child turns age 20."]
			],
			pageBack: "Back",
			askButton: "Ask details on WhatsApp",
			websiteLabel: "LIC Official Website:",
			plans: [
				{
					title: "LIC Bima Shree (Plan No. 748)",
					summary: "Limited premium money back plan with no premium in the last 4 years.",
					sections: [
						["Age Eligibility", ["Minimum Age: 8 years", "Maximum Age: 55 years"]],
						["Policy and Premium Term", ["Policy Term: 14, 16, 18, 20, 24, 28 years", "Premium Term: 10, 12, 14, 16, 20, 24 years"]],
						["Sum Assured", ["Minimum: Rs. 10 Lakhs", "No upper limit"]],
						["Premium Payment", ["Yearly", "Half-Yearly", "Quarterly", "Monthly (NACH)"]],
						["Other Information", ["Grace period: 30 days", "Loan and surrender after 1 year", "Revival within 5 years"]],
						["Rebates", ["Rebate based on premium mode"]],
						["Maturity Benefit", ["S.A. + Reversionary Bonus + Final Additional Bonus"]],
						["Money Back", ["14 yrs: 30% S.A. in 10th and 12th year", "16 yrs: 35% S.A. in 12th and 14th year", "18 yrs: 40% S.A. in 14th and 16th year", "20 yrs: 45% S.A. in 16th and 18th year", "24 yrs: 45% S.A. in 20th and 22nd year", "28 yrs: 45% S.A. in 24th and 26th year"]],
						["Death Benefit", ["S.A. + Guaranteed Additions + Loyalty Additions"]],
						["Riders", ["LIC Accident Benefit Rider", "LIC Accidental Death and Disability Rider", "LIC New Term Insurance Rider", "LIC Premium Waiver Benefit Rider"]],
						["Tax Benefits", ["Sec 80C and 10(10D) exemptions"]]
					],
					note: "Premium-saving money back plan for customers seeking high sum assured and periodic payouts."
				},
				{
					title: "LIC Money Back (Plan No. 720)",
					summary: "Participating money back plan with protection plus savings.",
					sections: [
						["Age Eligibility", ["Minimum Age: 13 years", "Maximum Age: 50 years"]],
						["Policy and Premium Term", ["Policy Term: 20 years", "Premium Term: 15 years"]],
						["Sum Assured", ["Minimum: Rs. 2 Lakhs", "No upper limit"]],
						["Premium Payment", ["Yearly, Half-Yearly, Quarterly, Monthly (NACH)"]],
						["Grace, Loan, Surrender, Revival", ["Grace: 30 days", "Loan and surrender after 1 year", "Revival within 5 years"]],
						["Rebates", ["Rebate based on premium mode and sum assured"]],
						["Money Back", ["5th year: 20% S.A.", "10th year: 20% S.A.", "15th year: 20% S.A.", "20th year: 40% S.A. + Bonus"]],
						["Maturity Benefit", ["40% S.A. + Bonus + Final Bonus"]],
						["Death Benefit", ["Death S.A. + Bonus + Final Bonus"]],
						["Riders", ["LIC Accident Benefit Rider", "LIC Accidental Death and Disability Rider", "LIC New Term Insurance Rider", "LIC Premium Waiver Benefit Rider"]],
						["Tax Benefits", ["Sec 80C and 10(10D) exemptions"]]
					],
					note: "Best option for those who need periodic payouts during policy term."
				},
				{
					title: "LIC Money Back (Plan No. 721)",
					summary: "Participating money back plan with long-term periodic returns.",
					sections: [
						["Age Eligibility", ["Minimum Age: 13 years", "Maximum Age: 45 years"]],
						["Policy and Premium Term", ["Policy Term: 25 years", "Premium Term: 20 years"]],
						["Sum Assured", ["Minimum: Rs. 2 Lakhs", "No upper limit"]],
						["Premium Payment", ["Yearly, Half-Yearly, Quarterly, Monthly (NACH)"]],
						["Grace, Loan, Surrender, Revival", ["Grace: 30 days", "Loan and surrender after 1 year", "Revival within 5 years"]],
						["Rebates", ["Rebate based on premium mode and sum assured"]],
						["Money Back", ["5th year: 15% S.A.", "10th year: 15% S.A.", "15th year: 15% S.A.", "20th year: 15% S.A.", "25th year: 40% S.A. + Bonus"]],
						["Maturity Benefit", ["40% S.A. + Bonus + Final Bonus"]],
						["Death Benefit", ["Death S.A. + Bonus + Final Bonus"]],
						["Riders", ["LIC Accident Benefit Rider", "LIC Accidental Death and Disability Rider", "LIC New Term Insurance Rider", "LIC Premium Waiver Benefit Rider"]],
						["Tax Benefits", ["Sec 80C and 10(10D) exemptions"]]
					],
					note: "Long-term money back option for periodic returns and protection."
				},
				{
					title: "LIC New Children's Money Back (Plan No. 732)",
					summary: "Money back plan designed for child education and future needs.",
					sections: [
						["Age Eligibility", ["Minimum Age: 30 days", "Maximum Age: 12 years"]],
						["Policy Term", ["Policy Term = 25 - entry age"]],
						["Sum Assured", ["Minimum: Rs. 2 Lakhs", "No upper limit"]],
						["Premium Payment", ["Single, Yearly, Half-Yearly, Quarterly, Monthly"]],
						["Grace, Loan, Surrender, Revival", ["Grace: 30 days", "Loan on surrender value after 1 year", "Surrender after 1 year", "Revival within 5 years"]],
						["Rebates", ["Rebate based on premium mode"]],
						["Money Back", ["Age 18: 20% S.A.", "Age 20: 20% S.A.", "Age 22: 20% S.A.", "Age 25: 40% S.A. + Bonus"]],
						["Maturity Benefit", ["40% S.A. + Bonus + Final Bonus"]],
						["Death Benefit", ["Death S.A. + Bonus + Final Bonus"]],
						["Riders", ["LIC Accident Benefit Rider", "LIC Accidental Death and Disability Rider", "LIC New Term Insurance Rider", "LIC Premium Waiver Benefit Rider"]],
						["Tax Benefits", ["Sec 80C and 10(10D) exemptions"]]
					],
					note: "A strong money back plan to support child future milestones."
				},
				{
					title: "LIC Jeevan Tarun (Plan No. 734)",
					summary: "Limited premium child plan with structured payouts for education milestones.",
					sections: [
						["Age Eligibility", ["Minimum Age: 30 days", "Maximum Age: 12 years"]],
						["Policy and Premium Term", ["Policy Term = 25 - entry age", "Premium Term = 20 - entry age"]],
						["Sum Assured", ["Minimum: Rs. 2 Lakhs", "No upper limit"]],
						["Premium Payment", ["Yearly, Half-Yearly, Quarterly, Monthly (NACH)"]],
						["Grace, Loan, Surrender, Revival", ["Grace: 30 days", "Loan on surrender value after 1 year", "Surrender after 1 year", "Revival within 5 years"]],
						["Rebates", ["Rebate based on premium mode"]],
						["Money Back Options", ["Option-1: Maturity = 100% S.A.", "Option-2: 5% S.A. (20-24), Maturity = 75%", "Option-3: 10% S.A. (20-24), Maturity = 50%", "Option-4: 15% S.A. (20-24), Maturity = 25%"]],
						["Maturity Benefit", ["S.A. + Bonus + Final Bonus"]],
						["Death Benefit", ["Death S.A. + Bonus + Final Bonus"]],
						["Riders", ["LIC Accident Benefit Rider", "LIC Accidental Death and Disability Rider", "LIC New Term Insurance Rider", "LIC Premium Waiver Benefit Rider"]],
						["Tax Benefits", ["Sec 80C and 10(10D) exemptions"]]
					],
					note: "One of the best child-focused money back structures for higher education planning."
				}
			]
		},
		wholeLifePlansDetail: {
			back: "Back",
			title: "Whole Life Plans",
			subtitle: "Click on a plan to know complete details.",
			cards: [
				["Jeevan Umang (745)", "8% guaranteed yearly income with cover up to 100 years."],
				["Jeevan Utsav (771)", "Limited premium whole life plan with 10% survival income."],
				["Utsav Single (883)", "Single premium whole life plan for lifelong income."]
			],
			pageBack: "Back",
			askButton: "Ask details on WhatsApp",
			websiteLabel: "LIC Official Website:",
			plans: [
				{
					title: "LIC Jeevan Umang (Plan No. 745)",
					summary: "Whole life plan offering savings plus lifelong annual income (pension-style).",
					sections: [
						["Age Eligibility", ["Minimum Age: 30 days", "Maximum Age: 55 years"]],
						["Policy Term", ["15 to 30 years"]],
						["Sum Assured", ["Minimum: Rs. 2 Lakhs", "No upper limit"]],
						["Premium Payment", ["Yearly, Half-Yearly, Quarterly, Monthly"]],
						["Other Information", ["Grace period: 30 days", "Loan after 1 year", "Surrender after 1 year", "Revival within 5 years"]],
						["Rebates", ["Rebate based on policy and premium mode"]],
						["Income and Maturity Benefit", ["8% of S.A. paid every year after policy term", "Income continues for life"]],
						["Death Benefit", ["S.A. + Bonus"]],
						["Riders", ["LIC Accident Benefit Rider", "LIC New Term Insurance Rider", "LIC Premium Waiver Benefit Rider"]],
						["Tax Benefits", ["Sec 80C and 10(10D) exemptions"]]
					],
					note: "A strong LIC whole life option for those seeking lifelong income and protection."
				},
				{
					title: "LIC Jeevan Utsav (Plan No. 771)",
					summary: "Limited premium whole life plan with savings and lifelong income.",
					sections: [
						["Age Eligibility", ["Minimum Age: 90 days", "Maximum Age: 65 years"]],
						["Policy Term", ["Minimum: 5 years", "Maximum: 16 years"]],
						["Sum Assured", ["Minimum: Rs. 5 Lakhs", "No upper limit"]],
						["Premium Payment", ["Yearly", "Half-Yearly", "Quarterly", "Monthly (NACH)"]],
						["Other Information", ["Grace period: 30 days", "Loan after 1 year (on surrender value)", "Surrender after 1 year", "Revival within 5 years"]],
						["Rebates", ["Rebate based on premium mode"]],
						["Maturity and Income Benefit", ["10% of S.A. paid every year as survival benefit", "Additional returns via Guaranteed Additions"]],
						["Death Benefit", ["S.A. + Guaranteed Additions"]],
						["Riders", ["Accident Benefit Rider", "New Term Insurance Rider", "Premium Waiver Benefit Rider"]],
						["Tax Benefits", ["Sec 80C and 10(10D) exemptions"]]
					],
					note: "Best LIC option for pension-style income plus guaranteed additions."
				},
				{
					title: "LIC Jeevan Utsav Single Premium (Plan No. 883)",
					summary: "Single premium whole life plan offering lifelong income with one-time payment.",
					sections: [
						["Age Eligibility", ["Minimum Age: 90 days", "Maximum Age: 65 years"]],
						["Policy Term", ["5 to 16 years"]],
						["Sum Assured", ["Minimum: Rs. 5 Lakhs", "No upper limit"]],
						["Premium Payment", ["Single premium only"]],
						["Other Information", ["Grace period: 30 days", "Loan after 1 year on surrender value", "Surrender after 1 year", "Revival within 5 years"]],
						["Rebates", ["Rebate based on sum assured"]],
						["Income and Maturity Benefit", ["10% of S.A. yearly income", "Lifelong payments", "Guaranteed Additions"]],
						["Death Benefit", ["S.A. + Guaranteed Additions"]],
						["Riders", ["Accident Benefit Rider", "New Term Insurance Rider", "Premium Waiver Benefit Rider"]],
						["Tax Benefits", ["Sec 80C and 10(10D) exemptions"]]
					],
					note: "Ideal for one-time investment seekers who want guaranteed lifelong income."
				}
			]
		},
		termPlansDetail: {
			back: "Back",
			title: "Term Insurance",
			subtitle: "Click on a plan to know complete details.",
			cards: [
				["Yuva Credit Life (877)", "Loan protection plan for education and vehicle borrowers."],
				["Yuva Term (875)", "Special term plan designed for young earners."],
				["New Jeevan Amar (955)", "High-risk cover with low premium structure."],
				["Saral Jeevan Bima (859)", "Simple term plan with easy-to-understand structure."],
				["Bima Kavach (887)", "Large term cover with flexible premium options."]
			],
			pageBack: "Back",
			askButton: "Ask details on WhatsApp",
			websiteLabel: "LIC Official Website:",
			plans: [
				{
					title: "LIC Yuva Credit Life (Plan No. 877)",
					summary: "Term insurance plan that protects families with active loan liabilities.",
					sections: [
						["Age Eligibility", ["Minimum Age: 18 years", "Maximum Age: 45 years"]],
						["Policy Term", ["5 to 30 years", "Limited Pay: 5, 10, 15 years"]],
						["Sum Assured", ["Minimum: Rs. 50 Lakhs", "Maximum: Rs. 5 Crores"]],
						["Premium Payment", ["Yearly, Half-Yearly"]],
						["Grace Period", ["30 days"]],
						["Revival", ["Can be revived within 5 years"]],
						["Rebates", ["Rebate based on policy and premium mode"]],
						["Maturity Benefit", ["No maturity amount"]],
						["Death Benefit", ["Nominee receives full sum assured on death during policy term"]],
						["Riders", ["LIC Accident Benefit Rider", "LIC Accidental Death and Disability Rider", "LIC New Term Insurance Rider", "LIC Premium Waiver Benefit Rider"]],
						["Tax Benefits", ["Sec 80C and 10(10D) exemptions"]]
					],
					note: "Best term plan for borrowers to protect family finances against outstanding loans."
				},
				{
					title: "LIC Yuva Term (Plan No. 875)",
					summary: "Pure term plan designed for young individuals with full risk cover.",
					sections: [
						["Age Eligibility", ["Minimum Age: 18 years", "Maximum Age: 45 years"]],
						["Policy Term", ["15 to 40 years"]],
						["Sum Assured", ["Minimum: Rs. 50 Lakhs", "Maximum: Rs. 5 Crores"]],
						["Premium Payment", ["Yearly, Half-Yearly"]],
						["Grace Period", ["30 days"]],
						["Revival", ["Can be revived within 5 years"]],
						["Rebates", ["Rebate based on sum assured and premium mode"]],
						["Maturity Benefit", ["No maturity return"]],
						["Death Benefit", ["Nominee gets S.A. on death during policy term"]],
						["Riders", ["LIC Accident Benefit Rider", "LIC Accidental Death and Disability Rider", "LIC New Term Insurance Rider", "LIC Premium Waiver Benefit Rider"]],
						["Tax Benefits", ["Sec 80C and 10(10D) exemptions"]]
					],
					note: "Best term option for young earners needing high risk cover at lower premium."
				},
				{
					title: "LIC New Jeevan Amar (Plan No. 955)",
					summary: "Pure term insurance plan offering high risk cover for family protection.",
					sections: [
						["Age Eligibility", ["Minimum Age: 18 years", "Maximum Age: 65 years"]],
						["Policy Term", ["10 to 40 years"]],
						["Sum Assured", ["Minimum: Rs. 25 Lakhs", "No upper limit"]],
						["Premium Payment", ["Yearly, Half-Yearly"]],
						["Grace Period", ["30 days"]],
						["Revival", ["Can be revived within 5 years"]],
						["Rebates", ["Rebate based on policy and premium mode"]],
						["Maturity Benefit", ["No maturity amount"]],
						["Death Benefit", ["Nominee gets S.A. if death occurs during policy term"]],
						["Riders", ["LIC Accident Benefit Rider", "LIC Accidental Death and Disability Rider", "LIC New Term Insurance Rider", "LIC Premium Waiver Benefit Rider"]],
						["Tax Benefits", ["Sec 80C and 10(10D) exemptions"]]
					],
					note: "Best low-premium high-risk cover plan for strong family security."
				},
				{
					title: "LIC Saral Jeevan Bima (Plan No. 859)",
					summary: "Simple pure term plan for complete life risk cover at affordable cost.",
					sections: [
						["Age Eligibility", ["Minimum: 18 years", "Maximum: 65 years"]],
						["Policy Term", ["5 to 40 years"]],
						["Sum Assured", ["Minimum: Rs. 5 Lakhs", "Maximum: Rs. 25 Lakhs"]],
						["Premium Payment", ["Yearly, Half-Yearly, Monthly"]],
						["Grace and Revival", ["Grace period: 30 days", "Revival within 5 years"]],
						["Rebates", ["Rebate based on sum assured and premium mode"]],
						["Maturity Benefit", ["No maturity return"]],
						["Death Benefit", ["Nominee receives full S.A. on death"]],
						["Riders", ["Accident Benefit Rider", "Premium Waiver Benefit Rider"]],
						["Tax Benefits", ["Sec 80C and 10(10D) exemptions"]]
					],
					note: "Best simple and low-cost term cover for basic family protection needs."
				},
				{
					title: "LIC Bima Kavach (Plan No. 887)",
					summary: "High-cover term plan with flexible premium options and advanced life-stage benefits.",
					sections: [
						["Age Eligibility", ["Minimum Age: 18 years", "Maximum Age: 65 years"]],
						["Policy Term", ["10 to 82 years", "Maximum maturity age: 100 years"]],
						["Sum Assured", ["Minimum: Rs. 2 Crores", "No upper limit (as per underwriting)"]],
						["Premium Payment", ["Regular Pay", "Single Premium", "Limited Pay (5, 10, 15 years)"]],
						["Death Benefit Options", ["Level Sum Assured (same cover throughout term)", "Increasing Sum Assured (10% increase every year from 6th year, up to 200%)"]],
						["Special Features", ["Life Stage Benefit: 50% cover increase at marriage", "25% cover increase on each childbirth", "Lower premium for women", "Lower premium for non-smokers"]],
						["Maturity Benefit", ["No maturity return (pure term plan)"]],
						["Riders", ["LIC Accidental Benefit Rider"]],
						["Tax Benefits", ["Sec 80C and 10(10D) exemptions"]]
					],
					note: "Best term plan for high-income individuals needing very large risk cover."
				}
			]
		},
		ulipPlansDetail: {
			back: "Back",
			title: "ULIP Plans",
			subtitle: "Click on a plan to know complete details.",
			cards: [
				["Index Plus (873)", "Market returns plus insurance cover."],
				["Nivesh Plus (749)", "Single premium investment with market growth."],
				["SIIP (752)", "Regular premium ULIP with SIP-style discipline."],
				["Protection Plus (886)", "Protection with flexible savings and top-up options."]
			],
			pageBack: "Back",
			askButton: "Ask details on WhatsApp",
			websiteLabel: "LIC Official Website:",
			plans: [
				{
					title: "LIC Index Plus (Plan No. 873)",
					summary: "NIFTY-based ULIP offering market-linked growth with life cover.",
					sections: [
						["Age Eligibility", ["Minimum Age: 90 days", "Maximum Age: 60 years"]],
						["Policy Term", ["Usually 10 to 25 years"]],
						["Premium Payment", ["Yearly", "Half-Yearly", "Quarterly", "Monthly (NACH)"]],
						["Investment Funds", ["Flexi Growth Fund (NIFTY 50)", "Flexi Smart Growth Fund (NIFTY 100)"]],
						["Sum Assured", ["Normally 7x to 10x annual premium (age based)"]],
						["Lock-in Period", ["5 years"]],
						["Guaranteed Additions", ["Available at specified milestones"]],
						["Partial Withdrawal", ["Allowed after 5 years"]],
						["Fund Switching", ["4 free switches per year"]],
						["Death Benefit", ["Higher of Basic S.A. or Fund Value"]],
						["Maturity Benefit", ["Total Unit Fund Value payout"]],
						["Tax Benefits", ["Sec 80C and 10(10D) exemptions"]]
					],
					note: "Best ULIP option for customers targeting long-term NIFTY-linked growth with life cover."
				},
				{
					title: "LIC Nivesh Plus (Plan No. 749)",
					summary: "Single premium ULIP for one-time investment with market returns and life cover.",
					sections: [
						["Premium Payment", ["Single premium only"]],
						["Minimum Premium", ["Rs. 1,25,000 minimum", "No upper limit (in Rs. 5,000 multiples)"]],
						["Sum Assured Options", ["Option 1: 1.25x single premium", "Option 2: 10x single premium"]],
						["Age Eligibility", ["Minimum Age: 90 days", "Maximum Age: 70 years (Option 1)", "Maximum Age: 35 years (Option 2)"]],
						["Policy Term", ["10 to 25 years (option and age based)"]],
						["Investment Funds", ["Bond Fund", "Secured Fund", "Balanced Fund", "Growth Fund"]],
						["Lock-in and Withdrawal", ["5-year lock-in", "Partial withdrawal after 5 years"]],
						["Fund Switching", ["4 free switches per year"]],
						["Death Benefit", ["Higher of Fund Value or Sum Assured"]],
						["Maturity Benefit", ["Total Fund Value payout"]],
						["Tax Benefits", ["Sec 80C and 10(10D) exemptions"]]
					],
					note: "Ideal ULIP for clients preferring one-time premium with market participation."
				},
				{
					title: "LIC SIIP (Plan No. 752)",
					summary: "Regular premium ULIP combining life cover and market-linked growth.",
					sections: [
						["Age Eligibility", ["Minimum Age: 0 years", "Maximum Age: 65 years"]],
						["Policy Term", ["Usually 10 to 25 years"]],
						["Premium Payment", ["Yearly", "Half-Yearly", "Quarterly", "Monthly"]],
						["Investment Funds", ["Bond Fund", "Secured Fund", "Balanced Fund", "Growth Fund"]],
						["Guaranteed Additions", ["Available on annual premium at specified stages"]],
						["Mortality Charge Refund", ["Refund at maturity on survival till policy completion"]],
						["Lock-in and Withdrawal", ["5-year lock-in", "Partial withdrawal after 5 years"]],
						["Fund Switching", ["4 free switches per year"]],
						["Death Benefit", ["Higher of Sum Assured or Fund Value"]],
						["Maturity Benefit", ["Total Unit Fund Value payout"]],
						["Tax Benefits", ["Sec 80C and 10(10D) exemptions"]]
					],
					note: "A flexible long-term ULIP for disciplined investors who need both growth and life cover."
				},
				{
					title: "LIC Protection Plus (Plan No. 886)",
					summary: "Modern ULIP with protection, market growth, top-up flexibility and life-stage value.",
					sections: [
						["Age Eligibility", ["Minimum Age: 18 years", "Maximum Age: 65 years"]],
						["Policy Term", ["10, 15, 20, 25 years"]],
						["Premium Payment Term", ["5, 7, 10, 15 years"]],
						["Minimum Premium", ["Rs. 36,000 to Rs. 60,000 based on mode"]],
						["Sum Assured", ["Age < 50: 7x annual premium", "Age >= 50: 5x annual premium"]],
						["Investment Funds", ["6 fund options based on risk appetite"]],
						["Lock-in and Withdrawal", ["5-year lock-in", "No surrender/withdrawal in lock-in", "Partial withdrawal after 5 years"]],
						["Top-up Premium", ["Additional top-up investment facility available"]],
						["Maturity Benefit", ["Fund Value + Mortality Charges Refund"]],
						["Death Benefit", ["Higher of Sum Assured or Fund Value", "Accidental death cover from day 1"]],
						["Tax Benefits", ["Sec 80C and 10(10D) exemptions"]]
					],
					note: "Strong ULIP option for clients seeking market returns with flexible protection design."
				}
			]
		},
		microPlansDetail: {
			back: "Back",
			title: "Micro Plans",
			subtitle: "Click on a plan to know complete details.",
			cards: [
				["Micro Bachat (751)", "Special savings option for common-income families."],
				["Jan Suraksha (880)", "Affordable insurance protection for lower-income households."]
			],
			pageBack: "Back",
			askButton: "Ask details on WhatsApp",
			websiteLabel: "LIC Official Website:",
			plans: [
				{
					title: "LIC Micro Bachat (Plan No. 751)",
					summary: "Savings plus protection plan designed for lower-income segments, available without GST load.",
					sections: [
						["Age Eligibility", ["Minimum Age: 18 years", "Maximum Age: 55 years"]],
						["Sum Assured", ["Minimum: Rs. 50,000", "Maximum: Rs. 2,00,000"]],
						["Policy Term", ["10 to 15 years"]],
						["Premium Payment", ["Premium payable throughout policy term"]],
						["GST Benefit", ["No GST on this policy"]],
						["Loan Facility", ["Loan after 1 policy year", "For paid-up policies, after 3 years"]],
						["Maturity Benefit", ["Sum Assured + Loyalty Additions"]],
						["Death Benefit", ["First 5 years: Basic Sum Assured", "After 5 years: higher of 7x annual premium or S.A. + Loyalty Additions"]],
						["Loyalty Additions", ["Paid at maturity based on LIC performance"]],
						["Riders", ["Accidental Death and Disability Benefit Rider"]],
						["Tax Benefits", ["Sec 80C and 10(10D) exemptions"]]
					],
					note: "Suitable micro insurance plan for low premium savings plus risk protection."
				},
				{
					title: "LIC Jan Suraksha (Plan No. 880)",
					summary: "Savings plus protection micro insurance plan for low-income families with guaranteed additions.",
					sections: [
						["Plan Type", ["Non-linked, non-participating endowment plan", "Designed for low-income families"]],
						["Age Eligibility", ["Minimum Age: 18 years", "Maximum Age: 55 years"]],
						["Policy Term", ["10 to 25 years"]],
						["Premium Payment Term", ["Limited premium (for example 5 years)"]],
						["Sum Assured", ["Minimum: Rs. 50,000", "Maximum: Rs. 2,00,000"]],
						["Guaranteed Additions", ["Added every year as per plan rules"]],
						["Maturity Benefit", ["Guaranteed lump sum amount (S.A. + Additions)"]],
						["Death Benefit", ["Financial support to family if death occurs during policy term"]],
						["Loan Facility", ["Loan available after 3 years"]],
						["Tax Benefits", ["Sec 80C and 10(10D) exemptions"]]
					],
					note: "A guaranteed savings and protection micro plan for low-income households."
				}
			]
		},
		benefitsEyebrow: "Health Benefits",
		benefitsTitle: "Comprehensive Health Protection Features",
		benefitsSubtitle: "Smart health coverage options to reduce treatment burden for you and your family.",
		benefitCards: [
			["Annual Checkup", "Preventive health tests to monitor wellness every year."],
			["Medicines Support", "Coverage support for prescribed medicines under eligible conditions."],
			["Dental Benefits", "Selected plans may include dental treatment related benefits."],
			["Diagnostics / Scans", "Support for diagnostic tests and scans during treatment."],
			["Diabetes / BP Coverage", "Plan options available for common lifestyle health concerns."],
			["Ayurvedic Treatment", "AYUSH treatment support in plans where it is covered."],
			["Senior Citizen Friendly", "Suitable options for parents and senior family members."],
			["Accidental Coverage", "Financial backup for accidental hospitalization and emergencies."],
			["No Renewal Limits", "Long-term continuity features in selected lifelong plans."],
			["Room Rent & ICU Support", "Hospital room and ICU expense support as per plan terms."],
			["Hospital Daily Cash", "Fixed daily cash benefit options to ease out-of-pocket costs."],
			["Mother & Newborn Care", "Maternity-focused options for mother and newborn expenses."],
			["Portability", "Switch insurer options while retaining key waiting-period benefits."]
		],
		benefitEmojis: ["🩺", "💊", "🦷", "🧪", "❤️", "🌿", "🧓", "🚑", "♾️", "🏥", "💵", "👶", "🔁"],
		benefitDetailBack: "Back",
		benefitDetailNote: "Actual coverage depends on policy terms, waiting periods, and insurer conditions.",
		benefitDetails: [
			{ summary: "Regular preventive screening support to detect risks early.", points: ["Health checkup benefits in eligible plans", "Annual wellness-focused usage support", "Reduces future treatment burden"] },
			{ summary: "Financial help for prescribed medicine expenses.", points: ["Coverage availability based on policy conditions", "Support for eligible prescription purchases", "Useful for ongoing medical needs"] },
			{ summary: "Dental-related treatment support in selected plans.", points: ["Dental cover depends on insurer options", "Can include specific procedures/tests", "Terms vary plan to plan"] },
			{ summary: "Support for diagnostics and medical scans during treatment.", points: ["Covers eligible pathology/scan expenses", "Helps reduce out-of-pocket costs", "Applicable per sum insured and terms"] },
			{ summary: "Health protection options suitable for common chronic conditions.", points: ["Useful for diabetes and BP related care", "Plan availability depends on underwriting", "Supports long-term health management"] },
			{ summary: "AYUSH treatment support where included by insurer.", points: ["Ayurveda and related treatments may be covered", "Depends on policy wording", "Helps with alternate-care affordability"] },
			{ summary: "Plans designed to be practical for senior citizens.", points: ["Suitable options for elderly parents", "Age-entry and waiting terms apply", "Simplifies family medical planning"] },
			{ summary: "Accident-related hospitalization financial protection.", points: ["Emergency expense support in eligible scenarios", "Can include hospitalization compensation", "Helps maintain financial stability"] },
			{ summary: "Long-term continuity support without frequent renewal barriers.", points: ["Useful for lifelong coverage planning", "Depends on selected policy design", "Improves long-term protection continuity"] },
			{ summary: "Room rent and ICU cost support for hospital treatment.", points: ["Room/ICU limits based on policy terms", "Critical for major hospitalization bills", "Helps reduce treatment stress"] },
			{ summary: "Fixed daily cash payout options during hospitalization.", points: ["Per-day cash benefits in eligible plans", "Assists with non-medical daily expenses", "Useful for attendants and travel costs"] },
			{ summary: "Maternity-focused support for mother and newborn care.", points: ["Benefits may include delivery/newborn expenses", "Waiting period conditions may apply", "Supports early family-stage needs"] },
			{ summary: "Option to switch insurer while retaining eligible benefits.", points: ["Supports continuity of protection", "Waiting-period carry-forward may apply", "Helps move to better plan options"] }
		],
		benefitsNote: "Benefits may vary based on selected plan and insurer terms.",
		chooseEyebrow: "Why Choose Me",
		chooseTitle: "Guidance That Helps You Decide with Confidence",
		chooseCards: [
			["Prompt & Dependable Support", "Timely response for service requests, reminders, and follow-ups."],
			["Local, Accessible Advisor", "Easy to reach support for families who prefer personal guidance."],
			["Need-Based Plan Selection", "Recommendations based on goals, responsibilities, and affordability."],
			["Transparent & Honest Advice", "Clear explanation of benefits, limits, and important policy terms."],
			["Family Financial Protection Focus", "Coverage planning aimed at long-term security for your loved ones."],
			["Service Beyond Purchase", "Continuous support from policy issue to maturity and claims stage."]
		],
		chooseEmojis: ["⚡", "📍", "🎯", "🔍", "🛡️", "🤝"],
		chooseDetailBack: "Back",
		chooseDetailNote: "These strengths are applied consistently from plan selection to servicing and claim guidance.",
		chooseDetails: [
			{ summary: "Fast and dependable support for every important policy step.", points: ["Quick response to calls and service requests", "Timely reminders for due dates and updates", "Reduced delays in policy servicing"] },
			{ summary: "Nearby advisor access for personal and easy communication.", points: ["Local support whenever guidance is needed", "Simple communication for families", "Faster coordination during urgent needs"] },
			{ summary: "Recommendations aligned to your real needs and budget.", points: ["Goal-oriented plan shortlisting", "Affordability and coverage balance", "No random one-size-fits-all suggestions"] },
			{ summary: "Clear, honest explanation before every decision.", points: ["Benefits and limits explained in simple language", "Important policy terms highlighted upfront", "Transparent guidance with no hidden confusion"] },
			{ summary: "Strong focus on long-term family financial safety.", points: ["Protection-first planning approach", "Coverage designed for family responsibilities", "Support for steady long-term security"] },
			{ summary: "Support continues even after policy purchase.", points: ["Post-sales servicing assistance", "Regular help till maturity stage", "Guidance during claim documentation and follow-up"] }
		],
		howEyebrow: "How It Works",
		howTitle: "Simple Process, Clear Guidance, Peace of Mind",
		howCards: [
			["Contact Me", "Call or WhatsApp to discuss your current needs and priorities."],
			["Share Requirement", "Share family goals, budget comfort, and preferred coverage level."],
			["Get Best Plan Guidance", "Receive suitable plan options and complete support for next steps."]
		],
		faqEyebrow: "Frequently Asked Questions",
		faqTitle: "Common Questions About LIC Guidance",
		faqItems: [
			[
				"How should I choose the right LIC plan?",
				"Select based on your goal, budget, and required risk cover after a quick profile discussion."
			],
			["Can I pay premium using online apps?", "Yes, premium can be paid through UPI apps and LIC online channels."],
			[
				"Do LIC plans provide tax benefits?",
				"Most eligible plans provide benefits under Sec 80C and maturity/death exemptions under Sec 10(10D)."
			],
			[
				"Will I get support for claims and service requests?",
				"Yes, end-to-end help is provided for premium reminders, nominations, policy servicing, and claim guidance."
			]
		],
		contactEyebrow: "Get In Touch",
		contactTitle: "Get the right LIC or health policy guidance today.",
		contactP1:
			"Share your details and receive practical recommendations based on your family's goals, life stage, and financial priorities.",
		contactP2:
			"Your information is treated responsibly, and every recommendation is explained clearly before you decide.",
		formLabels: ["Name", "Phone", "City", "Interested In", "Message"],
		formPlaceholders: ["Enter your full name", "Enter phone number", "Enter your city", "Tell your requirement"],
		interestDefault: "Select a service/plan",
		interestOptions: ["LIC Plan Guidance", "Health Insurance Plan", "Policy Service Support", "Claim Assistance"],
		formSubmit: "Request Callback",
		callNow: "Call Now",
		whatsappBtn: "WhatsApp"
	},
	te: {
		nav: ["హోమ్", "గురించి", "సేవలు", "ప్లాన్లు", "ప్రయోజనాలు", "సంప్రదించండి"],
		whatsappNav: "వాట్సాప్",
		heroEyebrow: "సీనియర్ ఎల్ఐసీ ఇన్సూరెన్స్ అడ్వైజర్",
		heroTitle: "నమ్మకమైన LIC & హెల్త్ ఇన్సూరెన్స్ మార్గదర్శకంతో మీ కుటుంబ భవిష్యత్తును సురక్షితం చేయండి",
		heroName: "నూకా సంతోష్ కుమార్",
		heroSubtitle: "N N V Insurance Services | మీ ఇంటి వద్ద LIC పాలసీ సేవలు",
		heroIntro1:
			"కొత్త పాలసీ ఎంపిక నుండి సర్వీసింగ్ మరియు క్లెయిమ్ సహాయం వరకు, మీ జీవన దశ, బడ్జెట్ మరియు లక్ష్యాలకు సరిపోయే సులభమైన మార్గదర్శకాన్ని పొందండి.",
		heroIntro2: "నిర్భయంగా సంప్రదించండి. ప్రతి చర్చ గోప్యత, శ్రద్ధ మరియు నిజాయితీతో నిర్వహించబడుతుంది.",
		heroButtons: ["ఇప్పుడే కాల్ చేయండి", "వాట్సాప్ చేయండి", "సేవలు చూడండి"],
		trustBadges: ["సీనియర్ LIC సహాయం", "కుటుంబ కేంద్రిత మార్గదర్శకం", "త్వరిత సేవా అప్‌డేట్లు"],
		aboutEyebrow: "అడ్వైజర్ గురించి",
		aboutTitle: "జీవితంలోని ప్రతి దశకు నమ్మకమైన ఇన్సూరెన్స్ సహాయం",
		aboutP1:
			"నేను నూకా సంతోష్ కుమార్, N N V Insurance Services లో సీనియర్ LIC ఇన్సూరెన్స్ అడ్వైజర్. పారదర్శకమైన, సులభమైన, నమ్మకమైన మార్గదర్శకంతో సరైన LIC మరియు హెల్త్ ఇన్సూరెన్స్ ఎంపికలో కుటుంబాలకు సహాయం చేస్తాను.",
		aboutP2:
			"చైల్డ్ ఎడ్యుకేషన్, రిటైర్మెంట్, ట్యాక్స్ సేవింగ్స్ లేదా మెడికల్ భద్రత ఏదైనా కావచ్చు, విచారణ నుంచి పాలసీ సర్వీసింగ్ వరకు వ్యక్తిగత సహాయం అందుతుంది.",
		showcaseEyebrow: "నమ్మకమైన సేవల ప్రదర్శన",
		showcaseTitle: "మా ఇన్సూరెన్స్ సేవల ముఖ్యాంశాలు",
		showcaseSubtitle:
			"N N V Insurance Services లో పాలసీ సహాయం, కస్టమర్ మార్గదర్శకం మరియు సేవా నిబద్ధతకు చిన్న విజువల్ చూపు.",
		showcaseCards: [
			["వ్యక్తిగత పాలసీ కన్సల్టేషన్", "జీవన మరియు హెల్త్ కవరేజీకి అవసరానికి తగ్గ సూచనలు."],
			["పాలసీ సర్వీసింగ్ సహాయం", "అప్డేట్స్ నుండి రిన్యూవల్స్ వరకు ప్రతి దశలో సహాయం."],
			["కుటుంబ ఆర్థిక ప్రణాళిక", "దీర్ఘకాల కుటుంబ భద్రతకు రక్షణ-కేంద్రిత మార్గదర్శకం."],
			["క్లెయిమ్ & మెచ్యూరిటీ సహాయం", "త్వరిత మరియు సులభ డాక్యుమెంటేషన్‌కు స్పష్టమైన సహాయం."],
			["నమ్మకమైన కస్టమర్ సంబంధాలు", "స్థిరత్వం మరియు పారదర్శకతపై ఆధారిత స్నేహపూర్వక సేవ."]
		],
		servicesEyebrow: "ప్రధాన సేవలు",
		servicesTitle: "LIC పాలసీలకు సంపూర్ణ సేవా సహాయం",
		serviceCards: [
			["ప్రీమియం చెల్లింపులు", "సౌకర్యవంతమైన అధికారిక చెల్లింపు మార్గాలపై సమయానికి మార్గదర్శకం."],
			["పాలసీ రివైవల్ / సరెండర్", "రివైవల్ ఎంపికలు లేదా సరెండర్ ప్రక్రియలో స్పష్టమైన సహాయం."],
			["పేరు / చిరునామా మార్పు", "పాలసీ రికార్డులో వ్యక్తిగత వివరాల నవీకరణకు సహాయం."],
			["డూప్లికేట్ పాలసీ బాండ్", "డూప్లికేట్ బాండ్ పొందేందుకు దశలవారీ సహాయం."],
			["PAN కార్డ్ చేర్పు", "PAN లింకింగ్ మరియు కంప్లయన్స్ అప్డేట్స్‌కు సహాయం."],
			["పాలసీపై రుణం", "అర్హత, ప్రక్రియ, డాక్యుమెంటేషన్‌పై మార్గదర్శకం."],
			["పాలసీ ట్రాన్స్‌ఫర్", "ఇష్టమైన బ్రాంచ్‌కు పాలసీ సర్వీసింగ్ మార్పుకు సహాయం."],
			["నామినీ మార్పు", "కుటుంబ రక్షణ తాజాగా ఉండేందుకు నామినీ అప్డేట్ సహాయం."],
			["చెల్లింపు మోడ్ మార్పు", "మీ క్యాష్‌ఫ్లోకు సరిపోయే విధంగా ప్రీమియం ఫ్రీక్వెన్సీ మార్పు."],
			["పాలసీ విచారణ", "పాలసీ స్థితి, ప్రయోజనాలు, due dates పై స్పష్టమైన సమాధానాలు."],
			["NEFT రిజిస్ట్రేషన్", "క్లెయిమ్ మరియు మెచ్యూరిటీ చెల్లింపులకు వేగవంతమైన NEFT వివరాలు."],
			["ప్రీమియం చెల్లింపు సర్టిఫికేట్", "ట్యాక్స్ ఫైలింగ్ మరియు రికార్డులకు సర్టిఫికేట్ సహాయం."],
			["మెచ్యూరిటీ / డెత్ క్లెయిమ్ సహాయం", "సమయానికి సరైన క్లెయిమ్ సమర్పణకు పూర్తి సహాయం."]
		],
		serviceEmojis: ["💳", "🔄", "🪪", "📄", "🧾", "💰", "🔁", "👨‍👩‍👧", "📆", "🔎", "🏦", "📑", "🤝"],
		serviceDetailBack: "వెనక్కి",
		serviceDetailNote: "డాక్యుమెంట్ చెక్ నుంచి ఫైనల్ కంప్లీషన్ వరకు ప్రతి దశలో పూర్తి సహాయం అందిస్తాము.",
		serviceDetails: [
			{ summary: "అధికారిక మార్గాల్లో ప్రీమియం సమయానికి చెల్లించేందుకు పూర్తి సహాయం.", points: ["Yearly, Half-Yearly, Quarterly, Monthly మోడ్ వివరాలు", "డ్యూ డేట్ రిమైండర్ మరియు పేమెంట్ గైడెన్స్", "రసీదు ధృవీకరణ మరియు సమస్య పరిష్కారం"] },
			{ summary: "ల్యాప్స్ అయిన పాలసీ రివైవల్ లేదా సరెండర్ పై స్పష్టమైన మార్గదర్శకం.", points: ["Eligibility మరియు పీనాల్టీ చెక్", "అవసరమైన డాక్యుమెంట్స్ జాబితా", "సబ్మిషన్ నుంచి స్టేటస్ కన్ఫర్మేషన్ వరకు ఫాలోఅప్"] },
			{ summary: "పేరు/చిరునామా మార్పులను తప్పులు లేకుండా అప్డేట్ చేయడానికి సహాయం.", points: ["సరైన అప్లికేషన్ ఎంపిక", "KYC మరియు అడ్రస్ ప్రూఫ్ చెక్", "రికార్డ్ అప్డేట్ పూర్తి అయ్యే వరకు ట్రాకింగ్"] },
			{ summary: "పాలసీ బాండ్ పోయినప్పుడు డూప్లికేట్ బాండ్ పొందడానికి పూర్తి సహాయం.", points: ["అప్లికేషన్ మరియు అవసరమైన ఫారమ్‌లు", "ID ప్రూఫ్ మరియు పాలసీ డిటైల్ వెరిఫికేషన్", "డూప్లికేట్ బాండ్ ఇష్యూ వరకు ఫాలోఅప్"] },
			{ summary: "PAN లింకింగ్ ద్వారా కంప్లయన్స్ అప్డేట్స్ సులభంగా పూర్తి చేయడం.", points: ["PAN సీడింగ్ ప్రాసెస్ గైడెన్స్", "డేటా మిస్మ్యాచ్ సరిచేయడం", "అప్డేట్ స్టేటస్ కన్ఫర్మేషన్"] },
			{ summary: "పాలసీపై లోన్ అర్హత, వడ్డీ, ప్రక్రియపై సరళ వివరణ.", points: ["సరెండర్ విలువ ఆధారంగా లోన్ చెక్", "లోన్ ఇన్టరెస్ట్ మరియు రీపేమెంట్ వివరాలు", "లోన్ రిలీజ్ వరకు పూర్తి సహాయం"] },
			{ summary: "పాలసీ సర్వీసింగ్‌ను మరొక బ్రాంచ్‌కు మార్చే ప్రక్రియలో సహాయం.", points: ["సోర్స్/టార్గెట్ బ్రాంచ్ ప్రాసెస్ క్లారిటీ", "అవసరమైన వెరిఫికేషన్ డాక్యుమెంట్స్", "ట్రాన్స్‌ఫర్ తర్వాత సర్వీస్ కొనసాగింపు చెక్"] },
			{ summary: "కుటుంబ భద్రత కోసం నామినీ మార్పు ప్రక్రియలో మార్గదర్శకం.", points: ["నామినీ మార్పు రిక్వెస్ట్ డాక్యుమెంట్స్", "మైనర్ నామినీ అయితే అపాయింటీ వివరాలు", "ఎండోర్స్‌మెంట్ పూర్తి అయ్యే వరకు ఫాలోఅప్"] },
			{ summary: "మీ ఆదాయ ప్రవాహానికి తగ్గట్టు పేమెంట్ మోడ్ మార్చడంలో సహాయం.", points: ["లభ్యమయ్యే మోడ్ ఆప్షన్స్ వివరణ", "పాలసీ అర్హత చెక్", "అప్డేట్ పూర్తయ్యే వరకు ట్రాకింగ్"] },
			{ summary: "పాలసీ స్థితి, బెనిఫిట్స్, బోనస్ వంటి విషయాలపై స్పష్టమైన సమాధానాలు.", points: ["పాలసీ స్టేటస్ మరియు డ్యూ డేట్ విశ్లేషణ", "బెనిఫిట్ క్లారిటీ సులభ భాషలో", "తదుపరి చర్యలపై గైడెన్స్"] },
			{ summary: "మెచ్యూరిటీ/క్లెయిమ్ చెల్లింపుల కోసం NEFT రిజిస్ట్రేషన్ సహాయం.", points: ["ఫారమ్ మరియు బ్యాంక్ ప్రూఫ్ చెక్‌లిస్ట్", "పేరు-అకౌంట్ మ్యాచ్ వెరిఫికేషన్", "వెరిఫికేషన్ పూర్తి అయ్యే వరకు ఫాలోఅప్"] },
			{ summary: "ట్యాక్స్ మరియు రికార్డుల కోసం ప్రీమియం సర్టిఫికెట్ త్వరగా పొందేందుకు సహాయం.", points: ["ఫైనాన్షియల్ ఇయర్ వారీగా సర్టిఫికెట్ సపోర్ట్", "డౌన్‌లోడ్/ఇష్యూ ప్రాసెస్ గైడెన్స్", "అర్జెంట్ ఫైలింగ్ కోసం ఫాస్ట్ సపోర్ట్"] },
			{ summary: "మెచ్యూరిటీ లేదా డెత్ క్లెయిమ్ సమయంలో కుటుంబానికి పూర్తి సహాయక సేవ.", points: ["క్లెయిమ్ డాక్యుమెంట్ చెక్‌లిస్ట్", "నామినీ సబ్మిషన్ ప్రక్రియ మార్గదర్శకం", "పేమెంట్ స్టేటస్ వరకు నిరంతర ఫాలోఅప్"] }
		],
		plansEyebrow: "LIC ప్లాన్లు",
		plansTitle: "ప్రతి అవసరానికి LIC ప్లాన్ కేటగిరీలు",
		plansSubtitle: "మీ కుటుంబ లక్ష్యాలు మరియు ఆర్థిక దశకు సరిపోయే కేటగిరీని ఎంచుకోండి.",
		planCards: [
			"పిల్లల ప్లాన్లు",
			"ఎండోమెంట్ ప్లాన్స్",
			"పెన్షన్ ప్లాన్స్",
			"మనీ బ్యాక్",
			"హోల్ లైఫ్ ప్లాన్స్",
			"టర్మ్ ఇన్సూరెన్స్",
			"యులిప్స్ (ULIPs)",
			"మైక్రో ప్లాన్స్"
		],
		childPlansDetail: {
			back: "వెనక్కి",
			title: "పిల్లల భవిష్యత్తు ప్లాన్స్",
			subtitle: "పూర్తి వివరాలు తెలుసుకోవడానికి ప్లాన్ పైన క్లిక్ చేయండి.",
			cards: [
				["అమృత్ బాల్ (774)", "పిల్లల హయ్యర్ ఎడ్యుకేషన్ కోసం ఫిక్స్‌డ్ రిటర్న్స్."],
				["జీవన్ తరుణ్ (734)", "పిల్లల హయ్యర్ ఎడ్యుకేషన్ కోసం ఫిక్స్‌డ్ రిటర్న్స్."],
				["న్యూ చిల్డ్రన్స్ మనీ బ్యాక్ (732)", "పిల్లల హయ్యర్ ఎడ్యుకేషన్ కోసం ఫిక్స్‌డ్ రిటర్న్స్."]
			],
			pageBack: "వెనక్కి",
			askButton: "వాట్సాప్‌లో వివరాలు అడగండి",
			websiteLabel: "LIC అధికారిక వెబ్‌సైట్:",
			plans: [
				{
					title: "LIC అమృత్ బాల్ పాలసీ (Plan No. 774)",
					summary: "పిల్లల ఉన్నత విద్య కోసం డిజైన్ చేసిన పరిమిత ప్రీమియం గ్యారంటీడ్ ఆడిషన్ ప్లాన్.",
					sections: [
						["వయస్సు అర్హత", ["కనీస వయస్సు: 30 రోజులు", "గరిష్ట వయస్సు: 13 సంవత్సరాలు"]],
						["పాలసీ టర్మ్", ["10 నుండి 25 సంవత్సరాల మధ్య"]],
						["ప్రీమియం టర్మ్", ["5, 6, 7 సంవత్సరాలు మాత్రమే"]],
						["పాలసీ మొత్తం", ["కనీసం రూ.2 లక్షలు", "గరిష్ట పరిమితి లేదు"]],
						["ప్రీమియం చెల్లింపు", ["Single, Yearly, Half-Yearly, Quarterly, Monthly"]],
						["మెచ్యూరిటీ & డెత్ బెనిఫిట్", ["మెచ్యూరిటీ: SA + Guaranteed Additions", "డెత్: SA + Guaranteed Additions నామినికి చెల్లించబడుతుంది"]],
						["ఇతర వివరాలు", ["లోన్ మరియు సరెండర్: 1 సంవత్సరం తర్వాత లభిస్తుంది", "పన్ను మినహాయింపులు: 80C మరియు 10(10D) వర్తిస్తాయి"]]
					],
					note: "పిల్లల భవిష్యత్తు అవసరాలు తీర్చేందుకు మరియు రక్షణ-పొదుపు కలయిక కోసం ఇది ఉత్తమ ఎంపిక."
				},
				{
					title: "LIC జీవన్ తరుణ్ (Plan No. 734)",
					summary: "పిల్లల ఉన్నత విద్య ప్రయోజనాల కోసం రూపొందించబడిన పరిమిత ప్రీమియం ఎండోమెంట్ ప్లాన్.",
					sections: [
						["వయస్సు అర్హత", ["కనీస వయస్సు: 30 రోజులు", "గరిష్ట వయస్సు: 12 సంవత్సరాలు"]],
						["పాలసీ & ప్రీమియం టర్మ్", ["పాలసీ టర్మ్ = 25 - ప్రవేశ వయస్సు", "ప్రీమియం టర్మ్ = 20 - ప్రవేశ వయస్సు"]],
						["పాలసీ మొత్తం", ["కనీసం రూ.2 లక్షలు", "గరిష్ట పరిమితి లేదు"]],
						["ప్రీమియం చెల్లింపు", ["Yearly, Half-Yearly, Quarterly, Monthly (NACH)"]],
						["గ్రేస్, లోన్, సరెండర్, రివైవల్", ["గ్రేస్ పీరియడ్: 30 రోజులు", "1 సంవత్సరం తర్వాత సరెండర్ విలువపై లోన్", "1 సంవత్సరం తర్వాత సరెండర్", "5 సంవత్సరాల లోపు రివైవ్ చేయవచ్చు"]],
						["మనీ బ్యాక్ ఆప్షన్స్", ["Option-1: Maturity = 100% S.A.", "Option-2: 5% S.A. (20-24), Maturity = 75%", "Option-3: 10% S.A. (20-24), Maturity = 50%", "Option-4: 15% S.A. (20-24), Maturity = 25%"]],
						["ప్రయోజనాలు & రైడర్స్", ["మెచ్యూరిటీ: S.A. + Bonus + Final Bonus", "డెత్: Death S.A. + Bonus + Final Bonus", "రైడర్స్: Accident Benefit, AD&D, New Term, Premium Waiver", "పన్ను ప్రయోజనాలు: Sec 80C మరియు 10(10D)"]]
					],
					note: "పిల్లల భవిష్యత్ విద్య కోసం ఇది ఉత్తమమైన ప్లాన్."
				},
				{
					title: "LIC న్యూ చిల్డ్రన్స్ మనీ బ్యాక్ (Plan No. 732)",
					summary: "పిల్లల విద్య మరియు భవిష్యత్తు అవసరాల కోసం రూపొందించిన మనీ బ్యాక్ ప్లాన్.",
					sections: [
						["వయస్సు అర్హత", ["కనీస వయస్సు: 30 రోజులు", "గరిష్ట వయస్సు: 12 సంవత్సరాలు"]],
						["పాలసీ టర్మ్", ["పాలసీ టర్మ్ = 25 - ప్రవేశ వయస్సు"]],
						["పాలసీ మొత్తం", ["కనీసం రూ.2 లక్షలు", "గరిష్ట పరిమితి లేదు"]],
						["ప్రీమియం చెల్లింపు", ["Single, Yearly, Half-Yearly, Quarterly, Monthly"]],
						["గ్రేస్, లోన్, సరెండర్, రివైవల్", ["గ్రేస్ పీరియడ్: 30 రోజులు", "1 సంవత్సరం తర్వాత సరెండర్ విలువపై లోన్", "1 సంవత్సరం తర్వాత సరెండర్", "5 సంవత్సరాల లోపు రివైవ్ చేయవచ్చు"]],
						["మనీ బ్యాక్ షెడ్యూల్", ["18 సంవత్సరాలు: 20% S.A.", "20 సంవత్సరాలు: 20% S.A.", "22 సంవత్సరాలు: 20% S.A.", "25 సంవత్సరాలు: 40% S.A. + Bonus"]],
						["ప్రయోజనాలు & రైడర్స్", ["మెచ్యూరిటీ: 40% S.A. + Bonus + Final Bonus", "డెత్: Death S.A. + Bonus + Final Bonus", "రైడర్స్: Accident Benefit, AD&D, New Term, Premium Waiver", "పన్ను ప్రయోజనాలు: Sec 80C మరియు 10(10D)"]]
					],
					note: "పిల్లల భవిష్యత్తు కోసం మనీ బ్యాక్ సదుపాయం కలిగిన ఉత్తమ ప్లాన్."
				}
			]
		},
		endowmentPlansDetail: {
			back: "వెనక్కి",
			title: "ఎండోమెంట్ ప్లాన్స్",
			subtitle: "పూర్తి వివరాలు తెలుసుకోవడానికి ప్లాన్ పైన క్లిక్ చేయండి.",
			cards: [
				["జీవన్ లాభ్ (736)", "తక్కువ కాలం కట్టి ఎక్కువ రిటర్న్స్ పొందండి."],
				["న్యూ ఎండోమెంట్ ప్లాన్ (714)", "సేఫ్ సేవింగ్స్ మరియు లైఫ్ కవర్ కోసం బెస్ట్ ప్లాన్."],
				["జీవన్ ఆనంద్ పాలసీ (715)", "సేఫ్ సేవింగ్స్ మరియు లైఫ్ కవర్ కోసం బెస్ట్ ప్లాన్."],
				["సింగల్ ప్రీమియం ఎండోమెంట్ పాలసీ (717)", "సేఫ్ సేవింగ్స్ మరియు లైఫ్ కవర్ కోసం బెస్ట్ ప్లాన్."],
				["జీవన్ లక్ష్య పాలసీ (733)", "సేఫ్ సేవింగ్స్ మరియు లైఫ్ కవర్ కోసం బెస్ట్ ప్లాన్."],
				["ఎల్ఐసి భీమా జ్యోతి (760)", "సేఫ్ సేవింగ్స్ మరియు లైఫ్ కవర్ కోసం బెస్ట్ ప్లాన్."],
				["LIC బీమా లక్ష్మి (881)", "సేఫ్ సేవింగ్స్ మరియు లైఫ్ కవర్ కోసం బెస్ట్ ప్లాన్."]
			],
			pageBack: "వెనక్కి",
			askButton: "వాట్సాప్‌లో వివరాలు అడగండి",
			websiteLabel: "LIC అధికారిక వెబ్‌సైట్:",
			plans: [
				{
					title: "LIC జీవన్ లాభ్ (Plan No. 736)",
					summary: "తక్కువ కాలం కట్టి ఎక్కువ రిటర్న్స్ పొందే బెస్ట్ సేవింగ్స్ ప్లాన్.",
					sections: [
						["వయస్సు అర్హత", ["కనీస వయస్సు: 8 సంవత్సరాలు", "గరిష్ట వయస్సు: 59 సంవత్సరాలు"]],
						["పాలసీ & ప్రీమియం టర్మ్", ["16 ఏళ్ల టర్మ్ -> 10 ఏళ్లు ప్రీమియం", "21 ఏళ్ల టర్మ్ -> 15 ఏళ్లు ప్రీమియం", "25 ఏళ్ల టర్మ్ -> 16 ఏళ్లు ప్రీమియం"]],
						["పాలసీ మొత్తం", ["కనీసం రూ.2 లక్షలు", "గరిష్ట పరిమితి లేదు"]],
						["ప్రీమియం చెల్లింపు", ["వార్షిక, ఆర్థవార్షిక, త్రైమాసిక, నెలవారీ (NACH)"]],
						["ఇతర సమాచారం", ["గ్రేస్ పీరియడ్: 30 రోజులు", "లోన్: 1 సంవత్సరం తర్వాత", "సరెండర్: 1 సంవత్సరం తర్వాత", "రివైవల్: 5 సంవత్సరాల్లోపు", "ప్రీమియం మోడ్ మరియు పాలసీ మొత్తం ఆధారంగా రిబేట్"]],
						["మెచ్యూరిటీ & డెత్ బెనిఫిట్", ["మెచ్యూరిటీ: Sum Assured + Bonus + FAB", "డెత్: Sum Assured on Death + Bonuses"]],
						["రైడర్స్ & పన్ను ప్రయోజనాలు", ["Accident Benefit, AD&D, New Term, Premium Waiver Rider", "Sec 80C మరియు 10(10D) కింద మినహాయింపులు"]]
					],
					note: "మధ్యతరగతి మరియు ఉద్యోగులకు అత్యంత ఆదరణ పొందిన ప్లాన్ ఇది."
				},
				{
					title: "LIC న్యూ ఎండోమెంట్ ప్లాన్ (Plan No. 714)",
					summary: "హామీతో కూడిన రాబడి మరియు బోనస్ లభించే నాన్-లింక్డ్ లైఫ్ ఇన్సూరెన్స్ పాలసీ.",
					sections: [
						["వయస్సు అర్హత", ["కనీస వయస్సు: 8 సంవత్సరాలు", "గరిష్ట వయస్సు: 50 సంవత్సరాలు"]],
						["పాలసీ టర్మ్", ["కనీసం 12 సంవత్సరాలు", "గరిష్టం 35 సంవత్సరాలు"]],
						["పాలసీ మొత్తం", ["కనీసం రూ.2 లక్షలు", "గరిష్ట పరిమితి లేదు"]],
						["ప్రీమియం చెల్లింపు", ["Yearly, Half-Yearly, Quarterly, Monthly (NACH)"]],
						["లోన్ / సరెండర్ / రివైవల్", ["1 సంవత్సరం తర్వాత లోన్ మరియు సరెండర్", "5 సంవత్సరాల లోపు రివైవ్ చేయవచ్చు"]],
						["ప్రయోజనాలు", ["మెచ్యూరిటీ: Sum Assured + Reversionary Bonus + FAB", "డెత్: Sum Assured + Bonus + FAB"]],
						["రైడర్స్ & పన్ను ప్రయోజనాలు", ["Accident Benefit, AD&D, New Term, Premium Waiver Rider", "Sec 80C మరియు 10(10D) మినహాయింపులు"]]
					],
					note: "సేఫ్ సేవింగ్స్ మరియు లైఫ్ కవర్ కోసం ఇది మంచి ఎంపిక."
				},
				{
					title: "LIC న్యూ జీవన్ ఆనంద్ (Plan No. 715)",
					summary: "హోల్ లైఫ్ మరియు ఎండోమెంట్ ప్రయోజనాలు కలిగిన LIC ప్రముఖ పాలసీ.",
					sections: [
						["వయస్సు అర్హత", ["కనీస వయస్సు: 18 సంవత్సరాలు", "గరిష్ట వయస్సు: 50 సంవత్సరాలు"]],
						["పాలసీ టర్మ్", ["15 నుండి 35 సంవత్సరాలు"]],
						["పాలసీ మొత్తం", ["కనీసం రూ.2 లక్షలు", "గరిష్ట పరిమితి లేదు"]],
						["ప్రీమియం చెల్లింపు", ["Yearly, Half-Yearly, Quarterly, Monthly (NACH)"]],
						["ఇతర సమాచారం", ["గ్రేస్ పీరియడ్: 30 రోజులు", "లోన్ మరియు సరెండర్: 1 సంవత్సరం తర్వాత", "రివైవల్: 5 సంవత్సరాల్లోపు", "ప్రీమియం మోడ్ ఆధారంగా రిబేట్"]],
						["ప్రయోజనాలు", ["మెచ్యూరిటీ: SA + Bonus + FAB", "మెచ్యూరిటీ తర్వాత జీవితాంతం కవరేజ్", "డెత్: Death S.A. + Bonus"]],
						["రైడర్స్ & పన్ను ప్రయోజనాలు", ["Accident Benefit Rider, AD&D Rider, New Term Rider", "Sec 80C మరియు 10(10D) మినహాయింపులు"]]
					],
					note: "సేవింగ్స్ మరియు లైఫ్ టైం రిస్క్ కవర్ కోసం అత్యంత ప్రసిద్ధి చెందిన ప్లాన్."
				},
				{
					title: "LIC సింగల్ ప్రీమియం ఎండోమెంట్ (Plan No. 717)",
					summary: "ఒకే సారి ప్రీమియం చెల్లించి భవిష్యత్తులో రాబడి పొందే ఎండోమెంట్ ప్లాన్.",
					sections: [
						["వయస్సు అర్హత", ["కనీస వయస్సు: 30 రోజులు", "గరిష్ట వయస్సు: 65 సంవత్సరాలు"]],
						["పాలసీ టర్మ్", ["10 నుండి 25 సంవత్సరాలు"]],
						["పాలసీ మొత్తం", ["కనీసం రూ.1 లక్ష", "గరిష్ట పరిమితి లేదు"]],
						["ప్రీమియం చెల్లింపు", ["ఒకే సారి (Single Premium)"]],
						["తగ్గింపులు", ["పాలసీ మొత్తం ఆధారంగా రిబేట్"]],
						["ప్రయోజనాలు", ["మెచ్యూరిటీ: Bonus + Final Additional Bonus", "డెత్: Bonus + Final Bonus తో చెల్లింపు"]],
						["రైడర్స్ & పన్ను ప్రయోజనాలు", ["AD&D Rider, New Term Rider", "Sec 80C మరియు 10(10D) మినహాయింపులు"]]
					],
					note: "ఒకే సారి పెట్టుబడితో భవిష్యత్తును భద్రపర్చే ఉత్తమ పాలసీ."
				},
				{
					title: "LIC జీవన్ లక్ష్య (Plan No. 733)",
					summary: "పొదుపు మరియు ప్రమాద రక్షణను కలిపిన పరిమిత ప్రీమియం ప్లాన్.",
					sections: [
						["వయస్సు అర్హత", ["కనీస వయస్సు: 18 సంవత్సరాలు", "గరిష్ట వయస్సు: 50 సంవత్సరాలు"]],
						["పాలసీ టర్మ్", ["13 నుండి 25 సంవత్సరాలు", "చివరి 3 సంవత్సరాలకు ప్రీమియం లేదు"]],
						["పాలసీ మొత్తం", ["కనీసం రూ.2 లక్షలు", "గరిష్ట పరిమితి లేదు"]],
						["ప్రీమియం చెల్లింపు", ["Yearly, Half-Yearly, Quarterly, Monthly (NACH)"]],
						["ఇతర వివరాలు", ["గ్రేస్ పీరియడ్: 30 రోజులు", "లోన్ మరియు సరెండర్: 1 సంవత్సరం తర్వాత", "రివైవల్: 5 సంవత్సరాల్లోపు", "చెల్లింపు మోడ్ ఆధారంగా రిబేట్"]],
						["ప్రయోజనాలు", ["మెచ్యూరిటీ: Sum Assured + Bonus + FAB", "డెత్: ప్రతి సంవత్సరం 10% S.A. + చివరలో S.A. + Bonus"]],
						["రైడర్స్ & పన్ను ప్రయోజనాలు", ["Accident Benefit, AD&D, New Term Rider", "Sec 80C మరియు 10(10D) మినహాయింపులు"]]
					],
					note: "పొదుపు మరియు కుటుంబ భద్రత కోసం ఇది అత్యుత్తమమైన ప్లాన్."
				},
				{
					title: "LIC భీమా జ్యోతి (Plan No. 760)",
					summary: "గ్యారంటీడ్ ఆడిషన్స్‌తో కూడిన పరిమిత ప్రీమియం ఎండోమెంట్ ప్లాన్.",
					sections: [
						["వయస్సు అర్హత", ["కనీస వయస్సు: 0 సంవత్సరాలు", "గరిష్ట వయస్సు: 60 సంవత్సరాలు"]],
						["పాలసీ & ప్రీమియం టర్మ్", ["పాలసీ టర్మ్: 15 నుండి 20 సంవత్సరాలు", "ప్రీమియం టర్మ్: పాలసీ టర్మ్ - 5 సంవత్సరాలు"]],
						["పాలసీ మొత్తం", ["కనీసం రూ.1,25,000", "గరిష్ట పరిమితి లేదు"]],
						["ప్రీమియం చెల్లింపు", ["Yearly, Half-Yearly, Quarterly, Monthly (NACH)"]],
						["ఇతర సమాచారం", ["గ్రేస్ పీరియడ్: 30 రోజులు", "లోన్ మరియు సరెండర్: 1 సంవత్సరం తర్వాత", "రివైవల్: 5 సంవత్సరాల్లోపు", "ప్రీమియం మోడ్ ఆధారంగా రిబేట్"]],
						["ప్రయోజనాలు", ["మెచ్యూరిటీ: Sum Assured + Guaranteed Additions", "ప్రతి రూ.1000 SAకు రూ.50 గ్యారంటీడ్ ఆడిషన్", "డెత్: Death S.A. + Guaranteed Additions"]],
						["రైడర్స్ & పన్ను ప్రయోజనాలు", ["Accident Benefit, AD&D, New Term, Premium Waiver Rider", "Sec 80C మరియు 10(10D) మినహాయింపులు"]]
					],
					note: "గ్యారంటీడ్ రిటర్న్స్ కోసం ఉత్తమమైన LIC ప్లాన్."
				},
				{
					title: "LIC బీమా లక్ష్మి (Plan No. 881)",
					summary: "పొదుపు మరియు మనీ బ్యాక్ సదుపాయం కలిగిన లిమిటెడ్ ప్రీమియం ఎండోమెంట్ ప్లాన్.",
					sections: [
						["వయస్సు అర్హత", ["కనీస వయస్సు: 18 సంవత్సరాలు", "గరిష్ట వయస్సు: 50 సంవత్సరాలు"]],
						["పాలసీ & ప్రీమియం టర్మ్", ["పాలసీ టర్మ్: 20 సంవత్సరాలు", "ప్రీమియం టర్మ్: 7 నుండి 15 సంవత్సరాలు"]],
						["పాలసీ మొత్తం", ["కనీసం రూ.2 లక్షలు", "గరిష్ట పరిమితి లేదు"]],
						["ప్రీమియం చెల్లింపు", ["Yearly, Half-Yearly, Quarterly, Monthly (NACH)"]],
						["మనీ బ్యాక్ ప్రయోజనం", ["పాలసీ టర్మ్‌లో మధ్యలో కొన్ని శాతం S.A. చెల్లింపు", "మెచ్యూరిటీకి మిగిలిన మొత్తం + GA"]],
						["ఇతర సమాచారం", ["గ్రేస్ పీరియడ్: 30 రోజులు", "లోన్ మరియు సరెండర్: 2 సంవత్సరాల తర్వాత", "రివైవల్: 5 సంవత్సరాల్లోపు", "ప్రీమియం మోడ్ మరియు పాలసీ మొత్తంపై రిబేట్"]],
						["ప్రయోజనాలు", ["మెచ్యూరిటీ: Balance S.A. + GA", "డెత్: Full S.A. + GA"]],
						["రైడర్స్ & పన్ను ప్రయోజనాలు", ["Accident Benefit, AD&D, New Term, Premium Waiver Rider", "Sec 80C మరియు 10(10D) మినహాయింపులు"]]
					],
					note: "సేవింగ్స్ మరియు మధ్య మధ్యలో మనీ బ్యాక్ కోరుకునే వారికి ఉత్తమమైన ప్లాన్."
				}
			]
		},
		pensionPlansDetail: {
			back: "వెనక్కి",
			title: "పెన్షన్ ప్లాన్స్",
			subtitle: "పూర్తి వివరాలు తెలుసుకోవడానికి ప్లాన్ పైన క్లిక్ చేయండి.",
			cards: [
				["న్యూ పెన్షన్ ప్లస్ (867)", "యూలిప్ ఆధారిత బెస్ట్ పెన్షన్ ప్లాన్."],
				["జీవన్ అక్షయ్-VII (857)", "ఒకేసారి కట్టి మరుసటి నెల నుండి పెన్షన్ పొందండి."],
				["న్యూ జీవన్ శాంతి (758)", "భవిష్యత్తు పెన్షన్ కోసం ఇప్పుడే ఇన్వెస్ట్ చేయండి."],
				["సరల్ పెన్షన్ (862)", "సామాన్యుల కోసం స్టాండర్డ్ తక్షణ పెన్షన్."],
				["స్మార్ట్ పెన్షన్ (879)", "స్మార్ట్ రిటైర్మెంట్ ప్లానింగ్."]
			],
			pageBack: "వెనక్కి",
			askButton: "వాట్సాప్‌లో వివరాలు అడగండి",
			websiteLabel: "LIC అధికారిక వెబ్‌సైట్:",
			plans: [
				{
					title: "LIC New Pension Plus (Plan No. 867)",
					summary: "మార్కెట్-లింక్డ్ (ULIP) పెన్షన్ ప్లాన్ - రిటైర్మెంట్ కోసం ఫండ్ నిర్మించుకునే ఉత్తమ ఎంపిక.",
					sections: [
						["వయస్సు అర్హత", ["కనీస వయస్సు: 25 సంవత్సరాలు", "గరిష్ట వయస్సు: 75 సంవత్సరాలు", "Vesting Age: 35 నుండి 85 సంవత్సరాలు"]],
						["పాలసీ టర్మ్", ["10 నుండి 42 సంవత్సరాలు"]],
						["ప్రీమియం ఆప్షన్స్", ["Single Premium", "Regular Premium (Yearly, Half-Yearly, Quarterly, Monthly)", "Minimum: రూ.1,00,000 (Single)", "రూ.3,000/నెల (Regular)"]],
						["ఇన్వెస్ట్‌మెంట్ ఫండ్స్", ["Pension Growth Fund", "Balanced Fund", "Bond Fund", "Secured Fund"]],
						["Guaranteed Additions", ["ప్రీమియంపై 5% నుండి 15.5% వరకు గ్యారంటీడ్ అదనాలు"]],
						["పార్టియల్ విత్‌డ్రాయల్", ["5 సంవత్సరాల lock-in తర్వాత", "Fund Value లో 25% వరకు withdraw చేయవచ్చు"]],
						["డెత్ బెనిఫిట్", ["Unit Fund Value లేదా 105% premiums paid లో ఎక్కువది"]],
						["మెచ్యూరిటీ (Vesting)", ["60% వరకు corpus withdraw (commute) చేయవచ్చు", "మిగిలినది annuity plan కొనాలి"]],
						["ఇతర ప్రయోజనాలు", ["సంవత్సరానికి 4 free fund switches", "Sec 80C & 10(10D) పన్ను మినహాయింపులు"]]
					],
					note: "మార్కెట్-లింక్డ్ రిటర్న్స్‌తో రిటైర్మెంట్ corpus build చేసుకోవాలనుకునే వారికి బెస్ట్ ULIP పెన్షన్ ప్లాన్."
				},
				{
					title: "LIC జీవన్ అక్షయ్",
					summary: "ఒకే సారి పెట్టుబడితో జీవితాంతం గ్యారంటీడ్ యాన్యుటి (పెన్షన్) అందించే ప్లాన్.",
					sections: [
						["వయస్సు అర్హత", ["కనీస వయస్సు: 25 సంవత్సరాలు", "గరిష్ట వయస్సు: 85 సంవత్సరాలు"]],
						["పాలసీ మొత్తం (Purchase Price)", ["కనీసం రూ.1,00,000", "గరిష్ట పరిమితి లేదు"]],
						["యాన్యుటి చెల్లింపు విధానం", ["Yearly", "Half-Yearly", "Quarterly", "Monthly", "కనీసం నెలకు రూ.1,000"]],
						["యాన్యుటి ఆప్షన్స్", ["Single Life Annuity", "Joint Life Annuity", "Return of Purchase Price Option"]],
						["తగ్గింపులు", ["Purchase Price ఆధారంగా రిబేట్"]],
						["డెత్ బెనిఫిట్", ["ఎంచుకున్న ఆప్షన్ ప్రకారం నామినికి చెల్లింపు"]]
					],
					note: "రిటైర్మెంట్ తర్వాత జీవితాంతం గ్యారంటీడ్ ఆదాయం కోరుకునే వారికి ఉత్తమమైన పెన్షన్ ప్లాన్."
				},
				{
					title: "LIC జీవన్ శాంతి",
					summary: "డిఫర్‌డ్ యాన్యుటి ప్లాన్ - కొంతకాలం తర్వాత ప్రారంభమయ్యే జీవితాంతం పెన్షన్.",
					sections: [
						["వయస్సు అర్హత", ["కనీస వయస్సు: 30 సంవత్సరాలు", "గరిష్ట వయస్సు: 79 సంవత్సరాలు"]],
						["డిఫర్‌మెంట్ పీరియడ్", ["1 నుండి 5 సంవత్సరాలు"]],
						["పాలసీ మొత్తం (Purchase Price)", ["కనీసం రూ.1,50,000", "గరిష్ట పరిమితి లేదు"]],
						["యాన్యుటి చెల్లింపు విధానం", ["Yearly", "Half-Yearly", "Quarterly", "Monthly", "కనీసం నెలకు రూ.1,000"]],
						["లోన్ & సరెండర్", ["3 నెలల తర్వాత లోన్ & సరెండర్ సౌకర్యం"]],
						["తగ్గింపులు", ["Purchase Price ఆధారంగా రిబేట్"]],
						["డెత్ బెనిఫిట్ & ఆప్షన్స్", ["మరణం సమయంలో Purchase Price నామినికి చెల్లింపు", "Single Life Option", "Joint Life Option"]]
					],
					note: "రిటైర్మెంట్ కోసం ముందుగా ప్లాన్ చేసి, తరువాత స్థిరమైన పెన్షన్ పొందాలనుకునే వారికి ఉత్తమమైన ప్లాన్."
				},
				{
					title: "LIC సరల్ పెన్షన్",
					summary: "జీవితాంతం యాన్యుటి (పెన్షన్) అందించే సింపుల్ ఇమిడియేట్ అన్యుటి ప్లాన్.",
					sections: [
						["వయస్సు అర్హత", ["కనీస వయస్సు: 40 సంవత్సరాలు", "గరిష్ట వయస్సు: 80 సంవత్సరాలు"]],
						["పాలసీ మొత్తం (Purchase Price)", ["కనీసం రూ.1,00,000", "గరిష్ట పరిమితి లేదు"]],
						["యాన్యుటి చెల్లింపు విధానం", ["Yearly", "Half-Yearly", "Quarterly", "Monthly", "కనీసం నెలకు రూ.1,000 యాన్యుటి"]],
						["తగ్గింపులు", ["Purchase Price ఆధారంగా రిబేట్"]],
						["డెత్ బెనిఫిట్", ["ఎంచుకున్న అన్యుటి ఆప్షన్ ఆధారంగా నామినికి చెల్లింపు"]]
					],
					note: "రిటైర్మెంట్ తర్వాత స్థిరమైన ఆదాయం (పెన్షన్) కోరుకునే వారికి ఉత్తమమైన ప్లాన్."
				},
				{
					title: "LIC స్మార్ట్ పెన్షన్",
					summary: "జీవితాంతం యాన్యుటి అందించే ఫ్లెక్సిబుల్ పెన్షన్ ప్లాన్.",
					sections: [
						["వయస్సు అర్హత", ["కనీస వయస్సు: 18 సంవత్సరాలు", "గరిష్ట వయస్సు: 100 సంవత్సరాలు"]],
						["పాలసీ మొత్తం (Purchase Price)", ["కనీసం రూ.1,00,000", "గరిష్ట పరిమితి లేదు"]],
						["యాన్యుటి చెల్లింపు విధానం", ["Yearly", "Half-Yearly", "Quarterly", "Monthly", "కనీసం నెలకు రూ.1,000 యాన్యుటి"]],
						["లోన్ సౌకర్యం", ["3 నెలల తర్వాత లోన్ సౌకర్యం"]],
						["తగ్గింపులు", ["Purchase Price ఆధారంగా రిబేట్"]],
						["డెత్ బెనిఫిట్", ["ఎంచుకున్న ఆప్షన్ ప్రకారం నామినికి చెల్లింపు"]]
					],
					note: "రిటైర్మెంట్ తర్వాత స్థిరమైన ఆదాయం కోరుకునే వారికి స్మార్ట్ పెన్షన్ ప్లాన్."
				}
			]
		},
		moneyBackPlansDetail: {
			back: "వెనక్కి",
			title: "మనీ బ్యాక్ ప్లాన్స్",
			subtitle: "పూర్తి వివరాలు తెలుసుకోవడానికి ప్లాన్ పైన క్లిక్ చేయండి.",
			cards: [
				["భీమా శ్రీ (748)", "సంపన్నుల కోసం ప్రత్యేక మనీ బ్యాక్."],
				["న్యూ మనీ బ్యాక్ 20 ఏళ్లు (720)", "ప్రతి 5 ఏళ్లకోసారి డబ్బులు వెనక్కి."],
				["న్యూ మనీ బ్యాక్ 25 ఏళ్లు (721)", "ప్రతి 5 ఏళ్లకోసారి రిటర్న్స్ (25 ఏళ్ల టర్మ్)."],
				["చిల్డ్రన్స్ మనీ బ్యాక్ (732)", "పిల్లల చదువులకై సరైన సమయంలో డబ్బు."],
				["జీవన్ తరుణ్ (734)", "పిల్లల వయసు 20 రాగానే ప్రతి ఏటా డబ్బు."]
			],
			pageBack: "వెనక్కి",
			askButton: "వాట్సాప్‌లో వివరాలు అడగండి",
			websiteLabel: "LIC అధికారిక వెబ్‌సైట్:",
			plans: [
				{
					title: "LIC భీమా శ్రీ (Plan No. 748)",
					summary: "పరిమిత ప్రీమియం మనీ బ్యాక్ ప్లాన్ - చివరి 4 సంవత్సరాలకు ప్రీమియం అవసరం లేదు.",
					sections: [
						["వయస్సు అర్హత", ["కనీస వయస్సు: 8 సంవత్సరాలు", "గరిష్ట వయస్సు: 55 సంవత్సరాలు"]],
						["పాలసీ & ప్రీమియం టర్మ్", ["పాలసీ టర్మ్: 14, 16, 18, 20, 24, 28 సంవత్సరాలు", "ప్రీమియం టర్మ్: 10, 12, 14, 16, 20, 24 సంవత్సరాలు"]],
						["పాలసీ మొత్తం", ["కనీసం రూ.10 లక్షలు", "గరిష్ట పరిమితి లేదు"]],
						["ప్రీమియం చెల్లింపు", ["Yearly", "Half-Yearly", "Quarterly", "Monthly (NACH)"]],
						["ఇతర సమాచారం", ["గ్రేస్ పీరియడ్: 30 రోజులు", "లోన్ & సరెండర్: 1 సంవత్సరం తర్వాత", "రివైవల్: 5 సంవత్సరాల్లోపు"]],
						["తగ్గింపులు", ["ప్రీమియం మోడ్ ఆధారంగా రిబేట్"]],
						["మెచ్యూరిటీ ప్రయోజనం", ["S.A. + Reversionary Bonus + Final Additional Bonus"]],
						["మనీ బ్యాక్", ["14 yrs -> 10 & 12 సంవత్సరాల్లో 30% S.A.", "16 yrs -> 12 & 14 సంవత్సరాల్లో 35% S.A.", "18 yrs -> 14 & 16 సంవత్సరాల్లో 40% S.A.", "20 yrs -> 16 & 18 సంవత్సరాల్లో 45% S.A.", "24 yrs -> 20 & 22 సంవత్సరాల్లో 45% S.A.", "28 yrs -> 24 & 26 సంవత్సరాల్లో 45% S.A."]],
						["డెత్ బెనిఫిట్", ["S.A. + Guaranteed Additions + Loyalty Additions"]],
						["రైడర్స్", ["LIC Accident Benefit Rider", "LIC Accidental Death & Disability Rider", "LIC New Term Insurance Rider", "LIC Premium Waiver Benefit Rider"]],
						["పన్ను ప్రయోజనాలు", ["Sec 80C & 10(10D) మినహాయింపులు"]]
					],
					note: "హై సమ్ అష్యూర్డ్ & మనీ బ్యాక్ కోరుకునే వారికి ప్రీమియం సేవింగ్ ప్లాన్."
				},
				{
					title: "LIC మనీ బ్యాక్ (Plan No. 720)",
					summary: "లాభాలతో కూడిన మనీ బ్యాక్ ప్లాన్ - రక్షణ + పొదుపు కలయిక.",
					sections: [
						["వయస్సు అర్హత", ["కనీస వయస్సు: 13 సంవత్సరాలు", "గరిష్ట వయస్సు: 50 సంవత్సరాలు"]],
						["పాలసీ & ప్రీమియం టర్మ్", ["పాలసీ టర్మ్: 20 సంవత్సరాలు", "ప్రీమియం టర్మ్: 15 సంవత్సరాలు"]],
						["పాలసీ మొత్తం", ["కనీసం రూ.2 లక్షలు", "గరిష్ట పరిమితి లేదు"]],
						["ప్రీమియం చెల్లింపు", ["Yearly, Half-Yearly, Quarterly, Monthly (NACH)"]],
						["గ్రేస్ పీరియడ్", ["30 రోజులు"]],
						["లోన్ & సరెండర్", ["1 సంవత్సరం తర్వాత లోన్ & సరెండర్"]],
						["రివైవల్", ["5 సంవత్సరాల్లోపు రివైవ్ చేయవచ్చు"]],
						["తగ్గింపులు", ["ప్రీమియం మోడ్ & పాలసీ మొత్తంపై రిబేట్"]],
						["మనీ బ్యాక్", ["5వ సంవత్సరం: 20% S.A.", "10వ సంవత్సరం: 20% S.A.", "15వ సంవత్సరం: 20% S.A.", "20వ సంవత్సరం: 40% S.A. + Bonus"]],
						["మెచ్యూరిటీ ప్రయోజనం", ["40% S.A. + Bonus + Final Bonus"]],
						["డెత్ బెనిఫిట్", ["Death S.A. + Bonus + Final Bonus"]],
						["రైడర్స్", ["LIC Accident Benefit Rider", "LIC Accidental Death & Disability Rider", "LIC New Term Insurance Rider", "LIC Premium Waiver Benefit Rider"]],
						["పన్ను ప్రయోజనాలు", ["Sec 80C & 10(10D) మినహాయింపులు"]]
					],
					note: "మధ్య మధ్యలో డబ్బు కావాలనుకునే వారికి మనీ బ్యాక్ ప్లాన్ ఉత్తమ ఎంపిక."
				},
				{
					title: "LIC మనీ బ్యాక్ (Plan No. 721)",
					summary: "లాభాలతో కూడిన మనీ బ్యాక్ ప్లాన్ - పొదుపు మరియు రక్షణ కలయిక.",
					sections: [
						["వయస్సు అర్హత", ["కనీస వయస్సు: 13 సంవత్సరాలు", "గరిష్ట వయస్సు: 45 సంవత్సరాలు"]],
						["పాలసీ & ప్రీమియం టర్మ్", ["పాలసీ టర్మ్: 25 సంవత్సరాలు", "ప్రీమియం టర్మ్: 20 సంవత్సరాలు"]],
						["పాలసీ మొత్తం", ["కనీసం రూ.2 లక్షలు", "గరిష్ట పరిమితి లేదు"]],
						["ప్రీమియం చెల్లింపు", ["Yearly, Half-Yearly, Quarterly, Monthly (NACH)"]],
						["గ్రేస్ పీరియడ్", ["30 రోజులు"]],
						["లోన్ సౌకర్యం", ["1 సంవత్సరం తర్వాత లోన్ లభ్యం"]],
						["సరెండర్", ["1 సంవత్సరం తర్వాత సరెండర్"]],
						["రివైవల్", ["5 సంవత్సరాల్లోపు రివైవ్ చేయవచ్చు"]],
						["తగ్గింపులు", ["ప్రీమియం మోడ్ & పాలసీ మొత్తంపై రిబేట్"]],
						["మనీ బ్యాక్", ["5వ సంవత్సరం: 15% S.A.", "10వ సంవత్సరం: 15% S.A.", "15వ సంవత్సరం: 15% S.A.", "20వ సంవత్సరం: 15% S.A.", "25వ సంవత్సరం: 40% S.A. + Bonus"]],
						["మెచ్యూరిటీ ప్రయోజనం", ["40% S.A. + Bonus + Final Bonus"]],
						["డెత్ బెనిఫిట్", ["Death S.A. + Bonus + Final Bonus"]],
						["రైడర్స్", ["LIC Accident Benefit Rider", "LIC Accidental Death & Disability Rider", "LIC New Term Insurance Rider", "LIC Premium Waiver Benefit Rider"]],
						["పన్ను ప్రయోజనాలు", ["Sec 80C & 10(10D) మినహాయింపులు"]]
					],
					note: "మధ్య మధ్యలో డబ్బు పొందాలనుకునే వారికి దీర్ఘకాలిక మనీ బ్యాక్ ప్లాన్."
				},
				{
					title: "LIC న్యూ చిల్డ్రన్స్ మనీ బ్యాక్ (Plan No. 732)",
					summary: "పిల్లల విద్య మరియు భవిష్యత్తు అవసరాల కోసం రూపొందించిన మనీ బ్యాక్ ప్లాన్.",
					sections: [
						["వయస్సు అర్హత", ["కనీస వయస్సు: 30 రోజులు", "గరిష్ట వయస్సు: 12 సంవత్సరాలు"]],
						["పాలసీ టర్మ్", ["పాలసీ టర్మ్ = 25 - ప్రవేశ వయస్సు"]],
						["పాలసీ మొత్తం", ["కనీసం రూ.2 లక్షలు", "గరిష్ట పరిమితి లేదు"]],
						["ప్రీమియం చెల్లింపు", ["Single, Yearly, Half-Yearly, Quarterly, Monthly"]],
						["గ్రేస్ పీరియడ్", ["30 రోజులు"]],
						["లోన్ సౌకర్యం", ["1 సంవత్సరం తర్వాత సరెండర్ విలువపై లోన్"]],
						["సరెండర్", ["1 సంవత్సరం తర్వాత సరెండర్"]],
						["రివైవల్", ["5 సంవత్సరాల లోపు రివైవ్ చేయవచ్చు"]],
						["తగ్గింపులు", ["ప్రీమియం మోడ్ ఆధారంగా రిబేట్"]],
						["మనీ బ్యాక్", ["18 సంవత్సరాలు: 20% S.A.", "20 సంవత్సరాలు: 20% S.A.", "22 సంవత్సరాలు: 20% S.A.", "25 సంవత్సరాలు: 40% S.A. + Bonus"]],
						["మెచ్యూరిటీ ప్రయోజనం", ["40% S.A. + Bonus + Final Bonus"]],
						["డెత్ బెనిఫిట్", ["Death S.A. + Bonus + Final Bonus"]],
						["రైడర్స్", ["LIC Accident Benefit Rider", "LIC Accidental Death & Disability Rider", "LIC New Term Insurance Rider", "LIC Premium Waiver Benefit Rider"]],
						["పన్ను ప్రయోజనాలు", ["Sec 80C & 10(10D) మినహాయింపులు"]]
					],
					note: "పిల్లల భవిష్యత్తు కోసం మనీ బ్యాక్ సదుపాయం కలిగిన ఉత్తమ ప్లాన్."
				},
				{
					title: "LIC జీవన్ తరుణ్ (Plan No. 734)",
					summary: "పిల్లల ఉన్నత విద్య ప్రయోజనాల కోసం రూపొందించబడిన పరిమిత ప్రీమియం ఎండోమెంట్ ప్లాన్.",
					sections: [
						["వయస్సు అర్హత", ["కనీస వయస్సు: 30 రోజులు", "గరిష్ట వయస్సు: 12 సంవత్సరాలు"]],
						["పాలసీ & ప్రీమియం టర్మ్", ["పాలసీ టర్మ్ = 25 - ప్రవేశ వయస్సు", "ప్రీమియం టర్మ్ = 20 - ప్రవేశ వయస్సు"]],
						["పాలసీ మొత్తం", ["కనీసం రూ.2 లక్షలు", "గరిష్ట పరిమితి లేదు"]],
						["ప్రీమియం చెల్లింపు", ["Yearly, Half-Yearly, Quarterly, Monthly (NACH)"]],
						["గ్రేస్ పీరియడ్", ["30 రోజులు"]],
						["లోన్ సౌకర్యం", ["1 సంవత్సరం తర్వాత సరెండర్ విలువపై లోన్"]],
						["సరెండర్", ["1 సంవత్సరం తర్వాత సరెండర్ చేయవచ్చు"]],
						["రివైవల్", ["5 సంవత్సరాల లోపు రివైవ్ చేయవచ్చు"]],
						["తగ్గింపులు", ["ప్రీమియం మోడ్ ఆధారంగా రిబేట్"]],
						["మనీ బ్యాక్ ఆప్షన్స్", ["Option-1: Maturity = 100% S.A.", "Option-2: 5% S.A. (20-24), Maturity = 75%", "Option-3: 10% S.A. (20-24), Maturity = 50%", "Option-4: 15% S.A. (20-24), Maturity = 25%"]],
						["మెచ్యూరిటీ ప్రయోజనం", ["S.A. + Bonus + Final Bonus"]],
						["డెత్ బెనిఫిట్", ["Death S.A. + Bonus + Final Bonus"]],
						["రైడర్స్", ["LIC Accident Benefit Rider", "LIC Accidental Death & Disability Rider", "LIC New Term Insurance Rider", "LIC Premium Waiver Benefit Rider"]],
						["పన్ను ప్రయోజనాలు", ["Sec 80C & 10(10D) మినహాయింపులు"]]
					],
					note: "పిల్లల భవిష్యత్ విద్య కోసం ఇది ఉత్తమమైన ప్లాన్."
				}
			]
		},
		wholeLifePlansDetail: {
			back: "వెనక్కి",
			title: "హోల్ లైఫ్ ప్లాన్స్",
			subtitle: "పూర్తి వివరాలు తెలుసుకోవడానికి ప్లాన్ పైన క్లిక్ చేయండి.",
			cards: [
				["జీవన్ ఉమంగ్ (745)", "8% గ్యారెంటీ రిటర్న్స్, 100 ఏళ్ల కవర్."],
				["జీవన్ ఉత్సవ్ (771)", "ఒకసారి కడితే జీవితకాలం 10% రిటర్న్స్."],
				["ఉత్సవ్ సింగిల్ (883)", "సింగిల్ ప్రీమియంతో జీవితకాల ఆదాయం."]
			],
			pageBack: "వెనక్కి",
			askButton: "వాట్సాప్‌లో వివరాలు అడగండి",
			websiteLabel: "LIC అధికారిక వెబ్‌సైట్:",
			plans: [
				{
					title: "LIC జీవన్ ఉమంగ్ (Plan No. 745)",
					summary: "పొదుపు + జీవితాంతం ఆదాయం (పెన్షన్ స్టైల్) అందించే హోల్ లైఫ్ ప్లాన్.",
					sections: [
						["వయస్సు అర్హత", ["కనీస వయస్సు: 30 రోజులు", "గరిష్ట వయస్సు: 55 సంవత్సరాలు"]],
						["పాలసీ టర్మ్", ["15 నుండి 30 సంవత్సరాలు"]],
						["పాలసీ మొత్తం", ["కనీసం రూ.2 లక్షలు", "గరిష్ట పరిమితి లేదు"]],
						["ప్రీమియం చెల్లింపు", ["Yearly, Half-Yearly, Quarterly, Monthly"]],
						["ఇతర సమాచారం", ["గ్రేస్ పీరియడ్: 30 రోజులు", "లోన్: 1 సంవత్సరం తర్వాత", "సరెండర్: 1 సంవత్సరం తర్వాత", "రివైవల్: 5 సంవత్సరాల్లోపు"]],
						["తగ్గింపులు", ["పాలసీ & ప్రీమియం మోడ్ ఆధారంగా రిబేట్"]],
						["ఆదాయం / మెచ్యూరిటీ ప్రయోజనం", ["పాలసీ టర్మ్ తర్వాత ప్రతి సంవత్సరం 8% S.A.", "జీవితాంతం చెల్లింపులు"]],
						["డెత్ బెనిఫిట్", ["S.A. + Bonus"]],
						["రైడర్స్", ["LIC Accident Benefit Rider", "LIC New Term Insurance Rider", "LIC Premium Waiver Benefit Rider"]],
						["పన్ను ప్రయోజనాలు", ["Sec 80C & 10(10D) మినహాయింపులు"]]
					],
					note: "జీవితాంతం ఆదాయం కావాలనుకునే వారికి ఉత్తమమైన LIC ప్లాన్."
				},
				{
					title: "LIC జీవన్ ఉత్సవ్ (Plan No. 771)",
					summary: "పొదుపు + జీవితాంతం ఆదాయం అందించే లిమిటెడ్ ప్రీమియం హోల్ లైఫ్ ప్లాన్.",
					sections: [
						["వయస్సు అర్హత", ["కనీస వయస్సు: 90 రోజులు", "గరిష్ట వయస్సు: 65 సంవత్సరాలు"]],
						["పాలసీ టర్మ్", ["కనీసం 5 సంవత్సరాలు", "గరిష్టం 16 సంవత్సరాలు"]],
						["పాలసీ మొత్తం", ["కనీసం రూ.5 లక్షలు", "గరిష్ట పరిమితి లేదు"]],
						["ప్రీమియం చెల్లింపు", ["Yearly", "Half-Yearly", "Quarterly", "Monthly (NACH)"]],
						["ఇతర సమాచారం", ["గ్రేస్ పీరియడ్: 30 రోజులు", "లోన్: 1 సంవత్సరం తర్వాత (సరెండర్ విలువపై)", "సరెండర్: 1 సంవత్సరం తర్వాత", "రివైవల్: 5 సంవత్సరాల్లోపు"]],
						["తగ్గింపులు", ["ప్రీమియం మోడ్ ఆధారంగా రిబేట్"]],
						["మెచ్యూరిటీ / ఆదాయం ప్రయోజనం", ["ప్రతి సంవత్సరం 10% S.A. సర్వైవల్ బెనిఫిట్", "Guaranteed Additions తో అదనపు లాభాలు"]],
						["డెత్ బెనిఫిట్", ["S.A. + Guaranteed Additions"]],
						["రైడర్స్", ["Accident Benefit Rider", "New Term Insurance Rider", "Premium Waiver Benefit Rider"]],
						["పన్ను ప్రయోజనాలు", ["Sec 80C & 10(10D) మినహాయింపులు"]]
					],
					note: "పెన్షన్ స్టైల్ ఆదాయం + గ్యారంటీడ్ లాభాల కోసం ఉత్తమమైన LIC ప్లాన్."
				},
				{
					title: "LIC జీవన్ ఉత్సవ్ సింగిల్ ప్రీమియం (Plan No. 883)",
					summary: "ఒకే సారి ప్రీమియం చెల్లించి జీవితాంతం ఆదాయం పొందే హోల్ లైఫ్ ప్లాన్.",
					sections: [
						["వయస్సు అర్హత", ["కనీస వయస్సు: 90 రోజులు", "గరిష్ట వయస్సు: 65 సంవత్సరాలు"]],
						["పాలసీ టర్మ్", ["5 నుండి 16 సంవత్సరాలు"]],
						["పాలసీ మొత్తం", ["కనీసం రూ.5 లక్షలు", "గరిష్ట పరిమితి లేదు"]],
						["ప్రీమియం చెల్లింపు", ["ఒకే సారి (Single Premium)"]],
						["ఇతర సమాచారం", ["గ్రేస్ పీరియడ్: 30 రోజులు", "లోన్: 1 సంవత్సరం తర్వాత సరెండర్ విలువపై", "సరెండర్: 1 సంవత్సరం తర్వాత", "రివైవల్: 5 సంవత్సరాల్లోపు"]],
						["తగ్గింపులు", ["పాలసీ మొత్తంపై రిబేట్"]],
						["ఆదాయం / మెచ్యూరిటీ ప్రయోజనం", ["ప్రతి సంవత్సరం 10% S.A. ఆదాయం", "జీవితాంతం చెల్లింపులు", "Guaranteed Additions"]],
						["డెత్ బెనిఫిట్", ["S.A. + Guaranteed Additions"]],
						["రైడర్స్", ["Accident Benefit Rider", "New Term Insurance Rider", "Premium Waiver Benefit Rider"]],
						["పన్ను ప్రయోజనాలు", ["Sec 80C & 10(10D) మినహాయింపులు"]]
					],
					note: "ఒకే సారి పెట్టుబడి పెట్టి జీవితాంతం ఆదాయం పొందాలనుకునే వారికి ఉత్తమమైన ప్లాన్."
				}
			]
		},
		termPlansDetail: {
			back: "వెనక్కి",
			title: "టర్మ్ ఇన్సూరెన్స్",
			subtitle: "పూర్తి వివరాలు తెలుసుకోవడానికి ప్లాన్ పైన క్లిక్ చేయండి.",
			cards: [
				["యువ క్రెడిట్ లైఫ్ (877)", "యువత తీసుకునే ఎడ్యుకేషన్/వెహికల్ లోన్లకు భద్రత."],
				["యువ టర్మ్ (875)", "యువత కోసం ప్రత్యేక టర్మ్ ప్లాన్."],
				["న్యూ జీవన్ అమర్ (955)", "అతి తక్కువ ప్రీమియంతో కోటి రూపాయల భద్రత."],
				["సరల్ జీవన్ బీమా (859)", "అందరికీ అర్థమయ్యే సులభమైన టర్మ్ ప్లాన్."],
				["బీమా కవచ్ (887)", "తక్కువ ఖర్చుతో ఎక్కువ భద్రత."]
			],
			pageBack: "వెనక్కి",
			askButton: "వాట్సాప్‌లో వివరాలు అడగండి",
			websiteLabel: "LIC అధికారిక వెబ్‌సైట్:",
			plans: [
				{
					title: "LIC యువ క్రెడిట్ లైఫ్ (Plan No. 877)",
					summary: "లోన్ ఉన్నవారికి కుటుంబ ఆర్థిక భద్రత అందించే టర్మ్ ఇన్సూరెన్స్ ప్లాన్.",
					sections: [
						["వయస్సు అర్హత", ["కనీస వయస్సు: 18 సంవత్సరాలు", "గరిష్ట వయస్సు: 45 సంవత్సరాలు"]],
						["పాలసీ టర్మ్", ["5 నుండి 30 సంవత్సరాలు", "Limited Pay: 5, 10, 15 సంవత్సరాలు"]],
						["పాలసీ మొత్తం", ["కనీసం రూ.50 లక్షలు", "గరిష్టం రూ.5 కోట్లు"]],
						["ప్రీమియం చెల్లింపు", ["Yearly, Half-Yearly"]],
						["గ్రేస్ పీరియడ్", ["30 రోజులు"]],
						["రివైవల్", ["5 సంవత్సరాల్లోపు రివైవ్ చేయవచ్చు"]],
						["తగ్గింపులు", ["పాలసీ & ప్రీమియం మోడ్ ఆధారంగా రిబేట్"]],
						["మెచ్యూరిటీ ప్రయోజనం", ["మెచ్యూరిటీ వద్ద ఎటువంటి అమౌంట్ లేదు"]],
						["డెత్ బెనిఫిట్", ["పాలసీ కాలంలో మరణిస్తే నామినికి మొత్తం చెల్లింపు"]],
						["రైడర్స్", ["LIC Accident Benefit Rider", "LIC Accidental Death & Disability Rider", "LIC New Term Insurance Rider", "LIC Premium Waiver Benefit Rider"]],
						["పన్ను ప్రయోజనాలు", ["Sec 80C & 10(10D) మినహాయింపులు"]]
					],
					note: "లోన్ ఉన్నవారికి కుటుంబాన్ని రక్షించే బెస్ట్ టర్మ్ ప్లాన్."
				},
				{
					title: "LIC యువ టర్మ్ (Plan No. 875)",
					summary: "యువత కోసం రూపొందించిన ప్యూర్ టర్మ్ ప్లాన్ - కుటుంబానికి పూర్తి రిస్క్ కవర్.",
					sections: [
						["వయస్సు అర్హత", ["కనీస వయస్సు: 18 సంవత్సరాలు", "గరిష్ట వయస్సు: 45 సంవత్సరాలు"]],
						["పాలసీ టర్మ్", ["15 నుండి 40 సంవత్సరాలు"]],
						["పాలసీ మొత్తం", ["కనీసం రూ.50 లక్షలు", "గరిష్టం రూ.5 కోట్లు"]],
						["ప్రీమియం చెల్లింపు", ["Yearly, Half-Yearly"]],
						["గ్రేస్ పీరియడ్", ["30 రోజులు"]],
						["రివైవల్", ["5 సంవత్సరాల్లోపు రివైవ్ చేయవచ్చు"]],
						["తగ్గింపులు", ["పాలసీ మొత్తం & ప్రీమియం మోడ్ ఆధారంగా రిబేట్"]],
						["మెచ్యూరిటీ ప్రయోజనం", ["మెచ్యూరిటీ వద్ద ఎటువంటి రాబడి లేదు"]],
						["డెత్ బెనిఫిట్", ["పాలసీ కాలంలో మరణిస్తే నామినికి S.A. చెల్లింపు"]],
						["రైడర్స్", ["LIC Accident Benefit Rider", "LIC Accidental Death & Disability Rider", "LIC New Term Insurance Rider", "LIC Premium Waiver Benefit Rider"]],
						["పన్ను ప్రయోజనాలు", ["Sec 80C & 10(10D) మినహాయింపులు"]]
					],
					note: "యువత కోసం తక్కువ ప్రీమియంతో ఎక్కువ రిస్క్ కవర్ ఇచ్చే బెస్ట్ టర్మ్ ప్లాన్."
				},
				{
					title: "LIC జీవన్ అమర్ (Plan No. 955)",
					summary: "ప్యూర్ టర్మ్ ఇన్సూరెన్స్ - కుటుంబానికి పూర్తి రిస్క్ కవర్ అందించే ప్లాన్.",
					sections: [
						["వయస్సు అర్హత", ["కనీస వయస్సు: 18 సంవత్సరాలు", "గరిష్ట వయస్సు: 65 సంవత్సరాలు"]],
						["పాలసీ టర్మ్", ["10 నుండి 40 సంవత్సరాలు"]],
						["పాలసీ మొత్తం", ["కనీసం రూ.25 లక్షలు", "గరిష్ట పరిమితి లేదు"]],
						["ప్రీమియం చెల్లింపు", ["Yearly, Half-Yearly"]],
						["గ్రేస్ పీరియడ్", ["30 రోజులు"]],
						["రివైవల్", ["5 సంవత్సరాల్లోపు రివైవ్ చేయవచ్చు"]],
						["తగ్గింపులు", ["పాలసీ & ప్రీమియం మోడ్ ఆధారంగా రిబేట్"]],
						["మెచ్యూరిటీ ప్రయోజనం", ["మెచ్యూరిటీ వద్ద ఎటువంటి అమౌంట్ లేదు"]],
						["డెత్ బెనిఫిట్", ["పాలసీ కాలంలో మరణిస్తే నామినికి S.A. చెల్లింపు"]],
						["రైడర్స్", ["LIC Accident Benefit Rider", "LIC Accidental Death & Disability Rider", "LIC New Term Insurance Rider", "LIC Premium Waiver Benefit Rider"]],
						["పన్ను ప్రయోజనాలు", ["Sec 80C & 10(10D) మినహాయింపులు"]]
					],
					note: "తక్కువ ప్రీమియంతో ఎక్కువ రిస్క్ కవర్ కావాలనుకునే వారికి బెస్ట్ టర్మ్ ప్లాన్."
				},
				{
					title: "LIC సరల్ జీవన్ భీమా (Plan No. 859)",
					summary: "సింపుల్ టర్మ్ ప్లాన్ - తక్కువ ప్రీమియంతో కుటుంబానికి పూర్తి రిస్క్ కవర్.",
					sections: [
						["వయస్సు అర్హత", ["కనీసం 18 సంవత్సరాలు", "గరిష్టం 65 సంవత్సరాలు"]],
						["పాలసీ టర్మ్", ["5 నుండి 40 సంవత్సరాలు"]],
						["పాలసీ మొత్తం", ["కనీసం రూ.5 లక్షలు", "గరిష్టం రూ.25 లక్షలు"]],
						["ప్రీమియం చెల్లింపు", ["Yearly, Half-Yearly, Monthly"]],
						["గ్రేస్ పీరియడ్ & రివైవల్", ["గ్రేస్ పీరియడ్: 30 రోజులు", "రివైవల్: 5 సంవత్సరాల్లోపు"]],
						["తగ్గింపులు", ["పాలసీ మొత్తం & ప్రీమియం మోడ్ ఆధారంగా రిబేట్"]],
						["మెచ్యూరిటీ ప్రయోజనం", ["మెచ్యూరిటీ వద్ద ఎటువంటి రాబడి లేదు"]],
						["డెత్ బెనిఫిట్", ["మరణ సమయంలో నామినికి పూర్తి S.A. చెల్లింపు"]],
						["రైడర్స్", ["Accident Benefit Rider", "Premium Waiver Benefit Rider"]],
						["పన్ను ప్రయోజనాలు", ["Sec 80C & 10(10D) మినహాయింపులు"]]
					],
					note: "సింపుల్, తక్కువ ఖర్చుతో జీవిత భద్రత కోరుకునే వారికి ఉత్తమమైన టర్మ్ ప్లాన్."
				},
				{
					title: "LIC బీమా కవచ్ (Plan No. 887)",
					summary: "హై కవరేజ్ టర్మ్ ప్లాన్ - flexible premium options తో పెద్ద రిస్క్ కవర్.",
					sections: [
						["వయస్సు అర్హత", ["కనీస వయస్సు: 18 సంవత్సరాలు", "గరిష్ట వయస్సు: 65 సంవత్సరాలు"]],
						["పాలసీ టర్మ్", ["10 నుండి 82 సంవత్సరాలు", "గరిష్ట మెచ్యూరిటీ వయస్సు: 100 సంవత్సరాలు"]],
						["పాలసీ మొత్తం", ["కనీసం రూ.2 కోట్లు", "గరిష్ట పరిమితి లేదు (Underwriting ఆధారంగా)"]],
						["ప్రీమియం చెల్లింపు", ["Regular Pay", "Single Premium", "Limited Pay (5, 10, 15 సంవత్సరాలు)"]],
						["డెత్ బెనిఫిట్ ఆప్షన్స్", ["Level Sum Assured (మొత్తం టర్మ్ లో same cover)", "Increasing Sum Assured (6వ సంవత్సరం నుంచి ప్రతి సంవత్సరం 10% పెరుగుతుంది, max 200%)"]],
						["Special Features", ["Life Stage Benefit: పెళ్లి సమయంలో 50% cover increase", "పిల్లలు పుట్టినప్పుడు ప్రతి ఒక్కరికీ 25% cover increase", "మహిళలకు తక్కువ ప్రీమియం", "Non-smokers కి lower premium"]],
						["మెచ్యూరిటీ ప్రయోజనం", ["మెచ్యూరిటీ వద్ద ఎటువంటి రాబడి లేదు (Pure Term Plan)"]],
						["రైడర్స్", ["LIC Accidental Benefit Rider"]],
						["పన్ను ప్రయోజనాలు", ["Sec 80C & 10(10D) మినహాయింపులు"]]
					],
					note: "హై ఇన్కమ్ వ్యక్తులకు పెద్ద రిస్క్ కవర్ కోసం అత్యుత్తమ టర్మ్ ప్లాన్."
				}
			]
		},
		ulipPlansDetail: {
			back: "వెనక్కి",
			title: "యులిప్స్ (ULIPs)",
			subtitle: "పూర్తి వివరాలు తెలుసుకోవడానికి ప్లాన్ పైన క్లిక్ చేయండి.",
			cards: [
				["ఇండెక్స్ ప్లస్ (873)", "మార్కెట్ రిటర్న్స్ + ఇన్సూరెన్స్ కవర్."],
				["నివేశ్ ప్లస్ (749)", "ఒకేసారి పెట్టుబడి, మార్కెట్ లాభాలు."],
				["SIIP (752)", "SIP తరహాలో నెలానెలా పెట్టుబడి."],
				["ప్రొటెక్షన్ ప్లస్ (886)", "ఇన్సూరెన్స్ తో పాటు సేవింగ్స్."]
			],
			pageBack: "వెనక్కి",
			askButton: "వాట్సాప్‌లో వివరాలు అడగండి",
			websiteLabel: "LIC అధికారిక వెబ్‌సైట్:",
			plans: [
				{
					title: "LIC Index Plus (Plan No. 873)",
					summary: "NIFTY ఆధారిత ULIP ప్లాన్ - మార్కెట్ గ్రోత్ + లైఫ్ కవర్ కలిపిన ఆధునిక ఇన్వెస్ట్‌మెంట్ ప్లాన్.",
					sections: [
						["వయస్సు అర్హత", ["కనీస వయస్సు: 90 రోజులు", "గరిష్ట వయస్సు: 60 సంవత్సరాలు"]],
						["పాలసీ టర్మ్", ["సాధారణంగా 10 నుండి 25 సంవత్సరాలు"]],
						["ప్రీమియం చెల్లింపు", ["Yearly", "Half-Yearly", "Quarterly", "Monthly (NACH)"]],
						["ఇన్వెస్ట్‌మెంట్ ఫండ్స్", ["Flexi Growth Fund (NIFTY 50)", "Flexi Smart Growth Fund (NIFTY 100)"]],
						["సమ్ అష్యూర్డ్", ["సాధారణంగా Annual Premium కు 7 నుండి 10 రెట్లు (వయస్సు ఆధారంగా)"]],
						["లాక్-ఇన్ పీరియడ్", ["5 సంవత్సరాలు"]],
						["గ్యారంటీడ్ అదనాలు", ["నిర్దిష్ట కాలాల్లో Guaranteed Additions"]],
						["పార్టియల్ విత్‌డ్రాయల్", ["5 సంవత్సరాల తర్వాత withdraw సౌకర్యం"]],
						["ఫండ్ స్విచింగ్", ["సంవత్సరానికి 4 free switches"]],
						["డెత్ బెనిఫిట్", ["Basic S.A. లేదా Fund Value లో ఎక్కువది"]],
						["మెచ్యూరిటీ ప్రయోజనం", ["మొత్తం Unit Fund Value చెల్లింపు"]],
						["రైడర్", ["LIC Linked Accident Benefit Rider"]],
						["పన్ను ప్రయోజనాలు", ["Sec 80C & 10(10D) మినహాయింపులు"]]
					],
					note: "మార్కెట్‌లో NIFTY ఆధారంగా ఇన్వెస్ట్ చేసి, దీర్ఘకాలంలో అధిక రాబడులు పొందాలనుకునే వారికి బెస్ట్ ULIP ప్లాన్."
				},
				{
					title: "LIC నివేశ్ ప్లస్ (Plan No. 749)",
					summary: "Single Premium ULIP ప్లాన్ - ఒకేసారి పెట్టుబడి చేసి మార్కెట్ రిటర్న్స్ + లైఫ్ కవర్ పొందే ప్లాన్.",
					sections: [
						["ప్రీమియం చెల్లింపు", ["Single Premium మాత్రమే (ఒకే సారి పెట్టుబడి)"]],
						["కనీస ప్రీమియం", ["కనీసం రూ.1,25,000", "గరిష్ట పరిమితి లేదు (రూ.5,000 multiples)"]],
						["సమ్ అష్యూర్డ్ ఆప్షన్స్", ["Option 1: 1.25 రెట్లు Single Premium", "Option 2: 10 రెట్లు Single Premium"]],
						["వయస్సు అర్హత", ["కనీస వయస్సు: 90 రోజులు", "గరిష్ట వయస్సు: 70 సంవత్సరాలు (Option 1)", "గరిష్ట వయస్సు: 35 సంవత్సరాలు (Option 2)"]],
						["పాలసీ టర్మ్", ["10 నుండి 25 సంవత్సరాలు (option/వయస్సు ఆధారంగా)"]],
						["ఇన్వెస్ట్‌మెంట్ ఫండ్స్", ["Bond Fund", "Secured Fund", "Balanced Fund", "Growth Fund"]],
						["లాక్-ఇన్ పీరియడ్", ["5 సంవత్సరాలు"]],
						["పార్టియల్ విత్‌డ్రాయల్", ["5 సంవత్సరాల తర్వాత withdraw సౌకర్యం"]],
						["ఫండ్ స్విచింగ్", ["సంవత్సరానికి 4 free switches"]],
						["డెత్ బెనిఫిట్", ["Fund Value లేదా Sum Assured లో ఎక్కువది"]],
						["మెచ్యూరిటీ ప్రయోజనం", ["మొత్తం Fund Value చెల్లింపు"]],
						["పన్ను ప్రయోజనాలు", ["Sec 80C & 10(10D) మినహాయింపులు"]]
					],
					note: "ఒకే సారి పెట్టుబడి చేసి మార్కెట్ రిటర్న్స్ పొందాలనుకునే వారికి ఉత్తమ ULIP ప్లాన్."
				},
				{
					title: "LIC SIIP (Plan No. 752)",
					summary: "Regular Premium ULIP ప్లాన్ - మార్కెట్ రిటర్న్స్ + లైఫ్ కవర్ కలిపిన ఫ్లెక్సిబుల్ ఇన్వెస్ట్‌మెంట్ ప్లాన్.",
					sections: [
						["వయస్సు అర్హత", ["కనీస వయస్సు: 0 సంవత్సరాలు", "గరిష్ట వయస్సు: 65 సంవత్సరాలు"]],
						["పాలసీ టర్మ్", ["సాధారణంగా 10 నుండి 25 సంవత్సరాలు"]],
						["ప్రీమియం చెల్లింపు", ["Yearly", "Half-Yearly", "Quarterly", "Monthly"]],
						["ఇన్వెస్ట్‌మెంట్ ఫండ్స్", ["Bond Fund", "Secured Fund", "Balanced Fund", "Growth Fund"]],
						["గ్యారంటీడ్ అదనాలు", ["Annual Premium పై నిర్దిష్ట కాలాల్లో Guaranteed Additions"]],
						["మోర్టాలిటీ చార్జ్ రీఫండ్", ["పాలసీ మెచ్యూరిటీ వరకు బ్రతికుంటే మోర్టాలిటీ చార్జ్ రీఫండ్"]],
						["లాక్-ఇన్ పీరియడ్", ["5 సంవత్సరాలు"]],
						["పార్టియల్ విత్‌డ్రాయల్", ["5 సంవత్సరాల తర్వాత withdraw సౌకర్యం"]],
						["ఫండ్ స్విచింగ్", ["సంవత్సరానికి 4 free switches"]],
						["డెత్ బెనిఫిట్", ["Sum Assured లేదా Fund Value లో ఎక్కువది"]],
						["మెచ్యూరిటీ ప్రయోజనం", ["మొత్తం Unit Fund Value చెల్లింపు"]],
						["పన్ను ప్రయోజనాలు", ["Sec 80C & 10(10D) మినహాయింపులు"]]
					],
					note: "దీర్ఘకాలిక పెట్టుబడితో మార్కెట్ రిటర్న్స్ పొందుతూ, లైఫ్ కవర్ కూడా కావాలనుకునే వారికి ఉత్తమ ULIP ప్లాన్."
				},
				{
					title: "LIC Protection Plus (Plan No. 886)",
					summary: "ULIP ప్లాన్ - మార్కెట్ రిటర్న్స్ + లైఫ్ కవర్, టాప్-అప్ మరియు ఫ్లెక్సిబుల్ ఇన్వెస్ట్‌మెంట్ ఆప్షన్స్‌తో.",
					sections: [
						["వయస్సు అర్హత", ["కనీస వయస్సు: 18 సంవత్సరాలు", "గరిష్ట వయస్సు: 65 సంవత్సరాలు"]],
						["పాలసీ టర్మ్", ["10, 15, 20, 25 సంవత్సరాలు"]],
						["ప్రీమియం పేమెంట్ టర్మ్ (PPT)", ["5, 7, 10, 15 సంవత్సరాలు"]],
						["కనీస ప్రీమియం", ["రూ.36,000 నుండి రూ.60,000 వరకు (mode ఆధారంగా)"]],
						["సమ్ అష్యూర్డ్", ["వయస్సు < 50 అయితే: 7x Annual Premium", "వయస్సు >= 50 అయితే: 5x Annual Premium"]],
						["ఇన్వెస్ట్‌మెంట్ ఫండ్స్", ["Risk appetite ఆధారంగా 6 ఫండ్ ఆప్షన్స్"]],
						["లాక్-ఇన్ పీరియడ్", ["5 సంవత్సరాలు (withdraw/surrender లేదు)"]],
						["పార్టియల్ విత్‌డ్రాయల్", ["5 సంవత్సరాల తర్వాత withdraw సౌకర్యం"]],
						["టాప్-అప్ ప్రీమియం", ["అదనంగా పెట్టుబడి చేసే సౌకర్యం"]],
						["మెచ్యూరిటీ ప్రయోజనం", ["Fund Value + Mortality Charges Refund"]],
						["డెత్ బెనిఫిట్", ["Sum Assured లేదా Fund Value లో ఎక్కువది", "Accidental Death Cover (Day 1 నుంచే)"]],
						["పన్ను ప్రయోజనాలు", ["Sec 80C & 10(10D) మినహాయింపులు"]]
					],
					note: "మార్కెట్ రిటర్న్స్ + లైఫ్ కవర్ + ఫ్లెక్సిబుల్ ఇన్వెస్ట్‌మెంట్ కోసం రూపొందించిన ఆధునిక ULIP ప్లాన్."
				}
			]
		},
		microPlansDetail: {
			back: "వెనక్కి",
			title: "మైక్రో ప్లాన్స్",
			subtitle: "పూర్తి వివరాలు తెలుసుకోవడానికి ప్లాన్ పైన క్లిక్ చేయండి.",
			cards: [
				["మైక్రో బచత్ (751)", "సామాన్యుల కోసం ప్రత్యేక సేవింగ్స్."],
				["జన్ సురక్ష (880)", "అతి సామాన్యులకు భీమా రక్షణ."]
			],
			pageBack: "వెనక్కి",
			askButton: "వాట్సాప్‌లో వివరాలు అడగండి",
			websiteLabel: "LIC అధికారిక వెబ్‌సైట్:",
			plans: [
				{
					title: "LIC Micro Bachat (Plan No. 751)",
					summary: "తక్కువ ఆదాయం ఉన్న వారికి అనువైన సేవింగ్స్ + ప్రొటెక్షన్ ప్లాన్. GST లేకుండా అందుబాటులో ఉండే మైక్రో ఇన్సూరెన్స్ పాలసీ.",
					sections: [
						["వయస్సు అర్హత", ["కనీస వయస్సు: 18 సంవత్సరాలు", "గరిష్ట వయస్సు: 55 సంవత్సరాలు"]],
						["పాలసీ మొత్తం (Sum Assured)", ["కనీసం రూ.50,000", "గరిష్టం రూ.2,00,000"]],
						["పాలసీ టర్మ్", ["10 నుండి 15 సంవత్సరాలు"]],
						["ప్రీమియం చెల్లింపు", ["పాలసీ టర్మ్ వరకు ప్రీమియం చెల్లించాలి"]],
						["GST ప్రయోజనం", ["ఈ పాలసీపై GST లేదు"]],
						["లోన్ సౌకర్యం", ["1 సంవత్సరం ప్రీమియం తర్వాత లోన్ అవకాశం", "Paid-up పాలసీ అయితే 3 సంవత్సరాల తర్వాత"]],
						["మెచ్యూరిటీ ప్రయోజనం", ["Sum Assured + Loyalty Additions"]],
						["డెత్ బెనిఫిట్", ["మొదటి 5 సంవత్సరాల్లో: Basic Sum Assured", "5 సంవత్సరాల తర్వాత: 7x Annual Premium లేదా SA + Loyalty Additions (ఏది ఎక్కువైతే అది)"]],
						["లాయల్టీ అడిషన్స్", ["LIC performance ఆధారంగా మెచ్యూరిటీ సమయంలో చెల్లింపు"]],
						["రైడర్స్", ["Accidental Death and Disability Benefit Rider"]],
						["పన్ను ప్రయోజనాలు", ["Sec 80C & 10(10D) కింద మినహాయింపులు"]]
					],
					note: "తక్కువ ప్రీమియంతో సేవింగ్స్ + భద్రత కోరుకునే వారికి సరైన మైక్రో ఇన్సూరెన్స్ ప్లాన్."
				},
				{
					title: "LIC Jan Suraksha (Plan No. 880)",
					summary: "తక్కువ ఆదాయం ఉన్న కుటుంబాల కోసం రూపొందించిన సేవింగ్స్ + ప్రొటెక్షన్ మైక్రో ఇన్సూరెన్స్ ప్లాన్.",
					sections: [
						["ప్లాన్ వివరాలు", ["Non-linked, Non-participating Endowment Plan", "Low-income families కోసం ప్రత్యేకంగా రూపొందించబడింది"]],
						["వయస్సు అర్హత", ["కనీస వయస్సు: 18 సంవత్సరాలు", "గరిష్ట వయస్సు: 55 సంవత్సరాలు"]],
						["పాలసీ టర్మ్", ["10 నుండి 25 సంవత్సరాలు"]],
						["ప్రీమియం చెల్లింపు (PPT)", ["Limited Premium (ఉదా: 5 సంవత్సరాలు)"]],
						["పాలసీ మొత్తం (Sum Assured)", ["కనీసం రూ.50,000", "గరిష్టం రూ.2,00,000"]],
						["గ్యారంటీడ్ అడిషన్స్", ["ప్రతి సంవత్సరం Guaranteed Additions చేరుతాయి"]],
						["మెచ్యూరిటీ ప్రయోజనం", ["Guaranteed Lump Sum Amount (SA + Additions)"]],
						["డెత్ బెనిఫిట్", ["పాలసీ కాలంలో మరణిస్తే కుటుంబానికి ఆర్థిక సహాయం"]],
						["లోన్ సౌకర్యం", ["3 సంవత్సరాల తర్వాత లోన్ పొందవచ్చు"]],
						["పన్ను ప్రయోజనాలు", ["Sec 80C & 10(10D) కింద మినహాయింపులు"]]
					],
					note: "తక్కువ ప్రీమియంతో గ్యారంటీడ్ సేవింగ్స్ + భద్రత అందించే మైక్రో ఇన్సూరెన్స్ ప్లాన్."
				}
			]
		},
		benefitsEyebrow: "హెల్త్ ప్రయోజనాలు",
		benefitsTitle: "సమగ్ర ఆరోగ్య రక్షణ ఫీచర్లు",
		benefitsSubtitle: "మీ కుటుంబ వైద్య భారాన్ని తగ్గించే స్మార్ట్ హెల్త్ కవరేజీ ఎంపికలు.",
		benefitCards: [
			["ఏటా హెల్త్ చెకప్", "ప్రతి సంవత్సరం ఆరోగ్యాన్ని పర్యవేక్షించే ప్రివెంటివ్ పరీక్షలు."],
			["మెడిసిన్ సపోర్ట్", "అర్హత మేరకు వైద్యుల సూచించిన మందులకు కవరేజ్ సహాయం."],
			["డెంటల్ ప్రయోజనాలు", "కొన్ని ప్లాన్లలో డెంటల్ చికిత్సకు సంబంధించిన ప్రయోజనాలు."],
			["డయాగ్నస్టిక్స్ / స్కాన్స్", "చికిత్స సమయంలో అవసరమైన పరీక్షలు మరియు స్కాన్స్‌కు సహాయం."],
			["డయాబెటిస్ / BP కవరేజ్", "సాధారణ జీవనశైలి ఆరోగ్య సమస్యలకు ప్లాన్ ఎంపికలు."],
			["ఆయుర్వేద చికిత్స", "కవరేజ్ ఉన్న ప్లాన్లలో AYUSH చికిత్స సహాయం."],
			["సీనియర్ సిటిజన్ ఫ్రెండ్లీ", "తల్లిదండ్రులు మరియు వృద్ధులకు అనుకూల ఎంపికలు."],
			["యాక్సిడెంటల్ కవరేజ్", "అపఘాతం మరియు ఎమర్జెన్సీ హాస్పిటలైజేషన్ సమయంలో ఆర్థిక సహాయం."],
			["రిన్యువల్ పరిమితి లేదు", "ఎంపిక చేసిన lifetime ప్లాన్లలో దీర్ఘకాల continuity లక్షణాలు."],
			["రూమ్ రెంట్ & ICU సపోర్ట్", "ప్లాన్ నిబంధనల ప్రకారం హాస్పిటల్ రూమ్/ICU ఖర్చులకు సహాయం."],
			["హాస్పిటల్ డైలీ క్యాష్", "జేబు ఖర్చులను తగ్గించే రోజువారీ నగదు ప్రయోజన ఎంపికలు."],
			["తల్లి & న్యూ బోర్న్ కేర్", "మాతృత్వం మరియు శిశు సంరక్షణ ఖర్చులకు ఎంపికలు."],
			["పోర్టబిలిటీ", "ప్రధాన waiting-period ప్రయోజనాలతో insurer మార్పు అవకాశం."]
		],
		benefitEmojis: ["🩺", "💊", "🦷", "🧪", "❤️", "🌿", "🧓", "🚑", "♾️", "🏥", "💵", "👶", "🔁"],
		benefitDetailBack: "వెనక్కి",
		benefitDetailNote: "అసలు కవరేజ్ పాలసీ షరతులు, waiting periods మరియు insurer నిబంధనలపై ఆధారపడి ఉంటుంది.",
		benefitDetails: [
			{ summary: "ప్రతి సంవత్సరం ఆరోగ్య పరీక్షల ద్వారా ముందస్తు జాగ్రత్తకు సహాయం.", points: ["ఎంపిక చేసిన ప్లాన్లలో చెకప్ సపోర్ట్", "వెల్‌నెస్ ఫోకస్‌తో రెగ్యులర్ మానిటరింగ్", "భవిష్యత్ చికిత్స భారాన్ని తగ్గిస్తుంది"] },
			{ summary: "వైద్యుల సూచించిన మందుల ఖర్చులకు ఆర్థిక సహాయం.", points: ["పాలసీ అర్హత మేరకు మెడిసిన్ కవరేజ్", "ప్రిస్క్రిప్షన్ ఖర్చులపై ఉపశమనం", "దీర్ఘకాలిక చికిత్సలకు ఉపయోగకరం"] },
			{ summary: "ఎంపిక చేసిన ప్లాన్లలో డెంటల్ ట్రీట్మెంట్‌కు సంబంధిత ప్రయోజనాలు.", points: ["డెంటల్ కవరేజ్ ప్లాన్‌పై ఆధారపడి ఉంటుంది", "కొన్ని ప్రొసీజర్లు/టెస్టులు కలిగి ఉండవచ్చు", "పాలసీ షరతులు వర్తిస్తాయి"] },
			{ summary: "డయాగ్నస్టిక్స్ మరియు స్కాన్స్ ఖర్చులకు సహాయక కవరేజ్.", points: ["అర్హత కలిగిన టెస్టులకు ఆర్థిక మద్దతు", "పాకెట్ ఖర్చులను తగ్గించడంలో సహాయం", "సమ్ ఇన్ష్యూర్డ్ పరిమితులు వర్తిస్తాయి"] },
			{ summary: "డయాబెటిస్ మరియు BP వంటి సాధారణ ఆరోగ్య సమస్యలకు ఉపయోగకరమైన ఆప్షన్స్.", points: ["లైఫ్‌స్టైల్ వ్యాధుల నిర్వహణకు మద్దతు", "పాలసీ/అండర్‌రైటింగ్ ఆధారంగా లభ్యత", "దీర్ఘకాలిక ఆరోగ్య ప్రణాళికకు ఉపయోగం"] },
			{ summary: "AYUSH చికిత్సలకు (ఉన్న ప్లాన్లలో) సహాయక కవరేజ్.", points: ["ఆయుర్వేద వంటి చికిత్సలకు సపోర్ట్", "పాలసీ పదజాలం ప్రకారం ప్రయోజనం", "ఆల్టర్నేటివ్ కేర్ ఖర్చు తగ్గింపు"] },
			{ summary: "వృద్ధులకు అనుకూలమైన ఆరోగ్య రక్షణ ఎంపికలు.", points: ["సీనియర్ సిటిజన్లకు సరిపడే ప్లాన్ ఆప్షన్స్", "వయస్సు మరియు వెయిటింగ్ షరతులు వర్తింపు", "కుటుంబ వైద్య ప్రణాళిక సులభతరం"] },
			{ summary: "అపఘాతం సమయంలో హాస్పిటల్ ఖర్చులకు ఆర్థిక భరోసా.", points: ["ఎమర్జెన్సీ ఖర్చులకు మద్దతు", "అర్హత మేరకు హాస్పిటలైజేషన్ సపోర్ట్", "ఆర్థిక ఒత్తిడి తగ్గింపు"] },
			{ summary: "దీర్ఘకాలిక రక్షణలో కవరేజ్ continuity కి సహాయం.", points: ["నిరంతర కవరేజ్ ప్రణాళికకు ఉపయోగం", "ఎంపిక చేసిన ప్లాన్ ఫీచర్లపై ఆధారపడి ఉంటుంది", "ఫ్యామిలీ సెక్యూరిటీకి బలం"] },
			{ summary: "హాస్పిటల్ రూమ్ మరియు ICU ఖర్చులకు సపోర్ట్.", points: ["పాలసీ పరిమితుల ప్రకారం రూమ్/ICU కవరేజ్", "భారీ చికిత్స సమయంలో ఉపశమనం", "మెడికల్ బిల్స్ ప్రభావం తగ్గింపు"] },
			{ summary: "హాస్పిటలైజేషన్ సమయంలో రోజువారీ నగదు ప్రయోజన ఆప్షన్స్.", points: ["రోజుకు ఫిక్స్‌డ్ క్యాష్ బెనిఫిట్ ఎంపికలు", "నాన్-మెడికల్ రోజువారీ ఖర్చులకు సాయం", "అటెండర్/ప్రయాణ ఖర్చులకు ఉపశమనం"] },
			{ summary: "మాతృత్వం మరియు శిశు సంరక్షణ దశకు అనుకూల సపోర్ట్.", points: ["డెలివరీ/న్యూ బోర్న్ ఖర్చులకు ఎంపికలు", "వెయిటింగ్ పీరియడ్ షరతులు వర్తించవచ్చు", "ఫ్యామిలీ ప్రారంభ దశలో ఉపయోగం"] },
			{ summary: "ఇన్సూరర్ మార్పు సమయంలో ప్రయోజన continuity కు సపోర్ట్.", points: ["కవరేజ్ కొనసాగింపుకు ఉపయోగకరం", "వెయిటింగ్-పీరియడ్ carry-forward అవకాశాలు", "మంచి ప్లాన్‌కు మారడానికి సహాయం"] }
		],
		benefitsNote: "ఎంచుకున్న ప్లాన్ మరియు ఇన్సూరర్ నిబంధనలపై ప్రయోజనాలు మారవచ్చు.",
		chooseEyebrow: "ఎందుకు నన్నే ఎంచుకోవాలి",
		chooseTitle: "నమ్మకంగా నిర్ణయం తీసుకోవడానికి సరైన మార్గదర్శకం",
		chooseCards: [
			["త్వరిత & నమ్మకమైన సహాయం", "సర్వీస్ రిక్వెస్టులు, రిమైండర్లు, ఫాలోఅప్స్‌కు సమయానికి స్పందన."],
			["లోకల్ మరియు సులభంగా సంప్రదించగల అడ్వైజర్", "వ్యక్తిగత మార్గదర్శకం కోరే కుటుంబాలకు సులభ సేవ."],
			["అవసరానికి తగ్గ ప్లాన్ ఎంపిక", "లక్ష్యాలు, బాధ్యతలు, బడ్జెట్ ఆధారంగా సూచనలు."],
			["పారదర్శక & నిజాయితీ సలహా", "ప్రయోజనాలు, పరిమితులు, నిబంధనలపై స్పష్టమైన వివరణ."],
			["కుటుంబ ఆర్థిక రక్షణపై దృష్టి", "మీ కుటుంబ దీర్ఘకాల భద్రతకు అనుగుణ కవరేజ్ ప్రణాళిక."],
			["పాలసీ కొనుగోలు తరువాత కూడా సేవ", "పాలసీ ఇష్యూ నుంచి మెచ్యూరిటీ, క్లెయిమ్ వరకు నిరంతర సహాయం."]
		],
		chooseEmojis: ["⚡", "📍", "🎯", "🔍", "🛡️", "🤝"],
		chooseDetailBack: "వెనక్కి",
		chooseDetailNote: "ప్లాన్ ఎంపిక నుంచి క్లెయిమ్ వరకు ఈ బలాలు ప్రతి దశలో అమలు చేస్తాము.",
		chooseDetails: [
			{ summary: "ప్రతి పాలసీ సేవలో వేగవంతమైన మరియు నమ్మకమైన స్పందన.", points: ["సర్వీస్ రిక్వెస్ట్‌లకు త్వరిత స్పందన", "డ్యూ డేట్స్ మరియు అప్డేట్స్‌పై సమయానికి రిమైండర్లు", "పాలసీ సేవలో ఆలస్యాలు తగ్గింపు"] },
			{ summary: "లోకల్ అడ్వైజర్ అందుబాటులో ఉండటం వల్ల వ్యక్తిగత మార్గదర్శకం సులభం.", points: ["అవసరమైనప్పుడు సమీప సహాయం", "కుటుంబాలకు సులువైన కమ్యూనికేషన్", "అత్యవసర సమయంలో వేగవంతమైన సమన్వయం"] },
			{ summary: "మీ అవసరం మరియు బడ్జెట్‌కు తగ్గ ప్లాన్ సూచనలు.", points: ["లక్ష్యాల ఆధారంగా సరైన ప్లాన్ ఎంపిక", "కవరేజ్ మరియు ఖర్చు మధ్య సమతుల్యం", "ఒకే తరహా సలహా కాకుండా వ్యక్తిగత గైడెన్స్"] },
			{ summary: "ప్రతి నిర్ణయానికి ముందు స్పష్టమైన, నిజాయితీ వివరణ.", points: ["ప్రయోజనాలు మరియు పరిమితులు సులభ భాషలో వివరించడం", "ముఖ్యమైన షరతులు ముందుగానే చెప్పడం", "పారదర్శకంగా నిర్ణయం తీసుకోవడంలో సహాయం"] },
			{ summary: "కుటుంబ ఆర్థిక భద్రతపై దీర్ఘకాల దృష్టితో మార్గదర్శకం.", points: ["ప్రొటెక్షన్-ఫస్ట్ ప్లానింగ్ విధానం", "కుటుంబ బాధ్యతలకు సరిపోయే కవరేజ్", "దీర్ఘకాలిక భద్రతకు ప్రణాళిక సహాయం"] },
			{ summary: "పాలసీ కొనుగోలు తర్వాత కూడా నిరంతర సేవా మద్దతు.", points: ["పోస్ట్-సేల్స్ సర్వీస్ సహాయం", "మెచ్యూరిటీ దశ వరకు రెగ్యులర్ సపోర్ట్", "క్లెయిమ్ డాక్యుమెంటేషన్ మరియు ఫాలోఅప్ గైడెన్స్"] }
		],
		howEyebrow: "ఇది ఎలా పనిచేస్తుంది",
		howTitle: "సులభమైన ప్రక్రియ, స్పష్టమైన మార్గదర్శకం, మనశ్శాంతి",
		howCards: [
			["నన్ను సంప్రదించండి", "మీ అవసరాలపై కాల్ లేదా వాట్సాప్ ద్వారా చర్చించండి."],
			["మీ అవసరం చెప్పండి", "కుటుంబ లక్ష్యాలు, బడ్జెట్, కావాల్సిన కవరేజ్ వివరించండి."],
			["ఉత్తమ ప్లాన్ మార్గదర్శకం పొందండి", "మీకు సరిపోయే ఎంపికలు మరియు పూర్తి సహాయం పొందండి."]
		],
		faqEyebrow: "సాధారణ ప్రశ్నలు (FAQ)",
		faqTitle: "LIC మార్గదర్శకంపై తరచుగా అడిగే ప్రశ్నలు",
		faqItems: [
			[
				"క్లెయిమ్ ప్రాసెస్ ఎలా ఉంటుంది?",
				"సరైన డాక్యుమెంట్లు సమర్పించిన వెంటనే క్లెయిమ్ ప్రాసెస్ లో వేగవంతమైన సహాయం అందిస్తాము."
			],
			[
				"ప్రీమియం ఆన్‌లైన్ లో కట్టొచ్చా?",
				"అవును, PhonePe, Google Pay, Paytm మరియు LIC యాప్ ద్వారా మీ ఇంట్లో నుంచే ప్రీమియం సులభంగా చెల్లించవచ్చు."
			],
			[
				"టాక్స్ బెనిఫిట్స్ (Tax Benefits) ఉంటాయా?",
				"చాలా ప్లాన్లలో Sec 80C కింద మినహాయింపు, అలాగే Sec 10(10D) కింద మెచ్యూరిటీ/డెత్ బెనిఫిట్స్ పై పన్ను మినహాయింపు ఉంటుంది."
			],
			[
				"సరైన ప్లాన్ ఎంచుకోవడానికి ఎలా సహాయం చేస్తారు?",
				"మీ వయస్సు, కుటుంబ బాధ్యతలు, బడ్జెట్, లక్ష్యాల ఆధారంగా సరైన ప్లాన్ ను సులభంగా సూచిస్తాము."
			]
		],
		contactEyebrow: "సంప్రదించండి",
		contactTitle: "ఈరోజే సరైన LIC లేదా హెల్త్ పాలసీ మార్గదర్శకాన్ని పొందండి.",
		contactP1:
			"మీ వివరాలు పంచుకోండి. మీ కుటుంబ లక్ష్యాలు, జీవన దశ, ఆర్థిక అవసరాలకు అనుగుణ సలహాలు పొందండి.",
		contactP2:
			"మీ సమాచారం బాధ్యతగా నిర్వహించబడుతుంది. మీరు నిర్ణయం తీసుకునే ముందు ప్రతి సూచన స్పష్టంగా వివరిస్తాం.",
		formLabels: ["పేరు", "ఫోన్", "నగరం", "ఆసక్తి ఉన్న సేవ", "సందేశం"],
		formPlaceholders: ["మీ పూర్తి పేరు నమోదు చేయండి", "ఫోన్ నంబర్ నమోదు చేయండి", "మీ నగరం నమోదు చేయండి", "మీ అవసరం తెలియజేయండి"],
		interestDefault: "సేవ/ప్లాన్ ఎంచుకోండి",
		interestOptions: ["LIC ప్లాన్ మార్గదర్శకం", "హెల్త్ ఇన్సూరెన్స్ ప్లాన్", "పాలసీ సర్వీస్ సహాయం", "క్లెయిమ్ సహాయం"],
		formSubmit: "కాల్‌బ్యాక్ కోరండి",
		callNow: "ఇప్పుడే కాల్ చేయండి",
		whatsappBtn: "వాట్సాప్"
	}
};

const setText = (selector, value) => {
	const element = document.querySelector(selector);
	if (element && value) {
		element.textContent = value;
	}
};

const setListText = (selector, values) => {
	if (!values) {
		return;
	}

	const elements = document.querySelectorAll(selector);
	elements.forEach((element, index) => {
		if (values[index]) {
			element.textContent = values[index];
		}
	});
};

const setIconText = (selector, iconClass, text) => {
	const element = document.querySelector(selector);
	if (!element || !text) {
		return;
	}

	element.innerHTML = iconClass ? `<i class="${iconClass}"></i> ${text}` : text;
};

const renderChildPlanPage = (lang, planIndex) => {
	if (!translations[lang] || !childPlanPageContent) {
		return;
	}

	const childData = translations[lang].childPlansDetail;
	const safeIndex = Math.max(0, Math.min(planIndex, childData.plans.length - 1));
	activeChildPlanIndex = safeIndex;

	const selectedPlan = childData.plans[safeIndex];
	if (!selectedPlan) {
		return;
	}

	if (childPlanPageTitle) {
		childPlanPageTitle.textContent = selectedPlan.title;
	}
	if (childPlanPageSummary) {
		childPlanPageSummary.textContent = selectedPlan.summary;
	}
	if (childPlanPageNote) {
		childPlanPageNote.textContent = selectedPlan.note;
	}
	if (childPlanWebsiteLabel) {
		childPlanWebsiteLabel.textContent = childData.websiteLabel;
	}
	if (childPlanAskBtn) {
		setIconText("#childPlanAskBtn", "fa-brands fa-whatsapp", childData.askButton);
	}
	if (childPlanPageBackBtn) {
		childPlanPageBackBtn.textContent = `⬅ ${childData.pageBack}`;
	}

	childPlanPageContent.innerHTML = "";
	selectedPlan.sections.forEach((section) => {
		const block = document.createElement("article");
		block.className = "child-detail-block";

		const title = document.createElement("h6");
		title.textContent = section[0];
		block.appendChild(title);

		const list = document.createElement("ul");
		section[1].forEach((line) => {
			const item = document.createElement("li");
			item.textContent = line;
			list.appendChild(item);
		});
		block.appendChild(list);
		childPlanPageContent.appendChild(block);
	});

	if (childPlanPrevBtn) {
		childPlanPrevBtn.disabled = safeIndex === 0;
	}
	if (childPlanNextBtn) {
		childPlanNextBtn.disabled = safeIndex === childData.plans.length - 1;
	}
};

const renderEndowmentPlanPage = (lang, planIndex) => {
	if (!translations[lang] || !endowmentPlanPageContent) {
		return;
	}

	const data = translations[lang].endowmentPlansDetail;
	const safeIndex = Math.max(0, Math.min(planIndex, data.plans.length - 1));
	activeEndowmentPlanIndex = safeIndex;

	const selectedPlan = data.plans[safeIndex];
	if (!selectedPlan) {
		return;
	}

	if (endowmentPlanPageTitle) {
		endowmentPlanPageTitle.textContent = selectedPlan.title;
	}
	if (endowmentPlanPageSummary) {
		endowmentPlanPageSummary.textContent = selectedPlan.summary;
	}
	if (endowmentPlanPageNote) {
		endowmentPlanPageNote.textContent = selectedPlan.note;
	}
	if (endowmentPlanWebsiteLabel) {
		endowmentPlanWebsiteLabel.textContent = data.websiteLabel;
	}
	if (endowmentPlanAskBtn) {
		setIconText("#endowmentPlanAskBtn", "fa-brands fa-whatsapp", data.askButton);
	}
	if (endowmentPlanPageBackBtn) {
		endowmentPlanPageBackBtn.textContent = `⬅ ${data.pageBack}`;
	}

	endowmentPlanPageContent.innerHTML = "";
	selectedPlan.sections.forEach((section) => {
		const block = document.createElement("article");
		block.className = "child-detail-block";

		const title = document.createElement("h6");
		title.textContent = section[0];
		block.appendChild(title);

		const list = document.createElement("ul");
		section[1].forEach((line) => {
			const item = document.createElement("li");
			item.textContent = line;
			list.appendChild(item);
		});
		block.appendChild(list);
		endowmentPlanPageContent.appendChild(block);
	});

	if (endowmentPlanPrevBtn) {
		endowmentPlanPrevBtn.disabled = safeIndex === 0;
	}
	if (endowmentPlanNextBtn) {
		endowmentPlanNextBtn.disabled = safeIndex === data.plans.length - 1;
	}
};

const renderPensionPlanPage = (lang, planIndex) => {
	if (!translations[lang] || !pensionPlanPageContent) {
		return;
	}

	const data = translations[lang].pensionPlansDetail;
	const safeIndex = Math.max(0, Math.min(planIndex, data.plans.length - 1));
	activePensionPlanIndex = safeIndex;

	const selectedPlan = data.plans[safeIndex];
	if (!selectedPlan) {
		return;
	}

	if (pensionPlanPageTitle) {
		pensionPlanPageTitle.textContent = selectedPlan.title;
	}
	if (pensionPlanPageSummary) {
		pensionPlanPageSummary.textContent = selectedPlan.summary;
	}
	if (pensionPlanPageNote) {
		pensionPlanPageNote.textContent = selectedPlan.note;
	}
	if (pensionPlanWebsiteLabel) {
		pensionPlanWebsiteLabel.textContent = data.websiteLabel;
	}
	if (pensionPlanAskBtn) {
		setIconText("#pensionPlanAskBtn", "fa-brands fa-whatsapp", data.askButton);
	}
	if (pensionPlanPageBackBtn) {
		pensionPlanPageBackBtn.textContent = `⬅ ${data.pageBack}`;
	}

	pensionPlanPageContent.innerHTML = "";
	selectedPlan.sections.forEach((section) => {
		const block = document.createElement("article");
		block.className = "child-detail-block";

		const title = document.createElement("h6");
		title.textContent = section[0];
		block.appendChild(title);

		const list = document.createElement("ul");
		section[1].forEach((line) => {
			const item = document.createElement("li");
			item.textContent = line;
			list.appendChild(item);
		});
		block.appendChild(list);
		pensionPlanPageContent.appendChild(block);
	});

	if (pensionPlanPrevBtn) {
		pensionPlanPrevBtn.disabled = safeIndex === 0;
	}
	if (pensionPlanNextBtn) {
		pensionPlanNextBtn.disabled = safeIndex === data.plans.length - 1;
	}
};

const renderMoneyBackPlanPage = (lang, planIndex) => {
	if (!translations[lang] || !moneyBackPlanPageContent) {
		return;
	}

	const data = translations[lang].moneyBackPlansDetail;
	const safeIndex = Math.max(0, Math.min(planIndex, data.plans.length - 1));
	activeMoneyBackPlanIndex = safeIndex;

	const selectedPlan = data.plans[safeIndex];
	if (!selectedPlan) {
		return;
	}

	if (moneyBackPlanPageTitle) {
		moneyBackPlanPageTitle.textContent = selectedPlan.title;
	}
	if (moneyBackPlanPageSummary) {
		moneyBackPlanPageSummary.textContent = selectedPlan.summary;
	}
	if (moneyBackPlanPageNote) {
		moneyBackPlanPageNote.textContent = selectedPlan.note;
	}
	if (moneyBackPlanWebsiteLabel) {
		moneyBackPlanWebsiteLabel.textContent = data.websiteLabel;
	}
	if (moneyBackPlanAskBtn) {
		setIconText("#moneyBackPlanAskBtn", "fa-brands fa-whatsapp", data.askButton);
	}
	if (moneyBackPlanPageBackBtn) {
		moneyBackPlanPageBackBtn.textContent = `⬅ ${data.pageBack}`;
	}

	moneyBackPlanPageContent.innerHTML = "";
	selectedPlan.sections.forEach((section) => {
		const block = document.createElement("article");
		block.className = "child-detail-block";

		const title = document.createElement("h6");
		title.textContent = section[0];
		block.appendChild(title);

		const list = document.createElement("ul");
		section[1].forEach((line) => {
			const item = document.createElement("li");
			item.textContent = line;
			list.appendChild(item);
		});
		block.appendChild(list);
		moneyBackPlanPageContent.appendChild(block);
	});

	if (moneyBackPlanPrevBtn) {
		moneyBackPlanPrevBtn.disabled = safeIndex === 0;
	}
	if (moneyBackPlanNextBtn) {
		moneyBackPlanNextBtn.disabled = safeIndex === data.plans.length - 1;
	}
};

const renderWholeLifePlanPage = (lang, planIndex) => {
	if (!translations[lang] || !wholeLifePlanPageContent) {
		return;
	}

	const data = translations[lang].wholeLifePlansDetail;
	const safeIndex = Math.max(0, Math.min(planIndex, data.plans.length - 1));
	activeWholeLifePlanIndex = safeIndex;

	const selectedPlan = data.plans[safeIndex];
	if (!selectedPlan) {
		return;
	}

	if (wholeLifePlanPageTitle) {
		wholeLifePlanPageTitle.textContent = selectedPlan.title;
	}
	if (wholeLifePlanPageSummary) {
		wholeLifePlanPageSummary.textContent = selectedPlan.summary;
	}
	if (wholeLifePlanPageNote) {
		wholeLifePlanPageNote.textContent = selectedPlan.note;
	}
	if (wholeLifePlanWebsiteLabel) {
		wholeLifePlanWebsiteLabel.textContent = data.websiteLabel;
	}
	if (wholeLifePlanAskBtn) {
		setIconText("#wholeLifePlanAskBtn", "fa-brands fa-whatsapp", data.askButton);
	}
	if (wholeLifePlanPageBackBtn) {
		wholeLifePlanPageBackBtn.textContent = `⬅ ${data.pageBack}`;
	}

	wholeLifePlanPageContent.innerHTML = "";
	selectedPlan.sections.forEach((section) => {
		const block = document.createElement("article");
		block.className = "child-detail-block";

		const title = document.createElement("h6");
		title.textContent = section[0];
		block.appendChild(title);

		const list = document.createElement("ul");
		section[1].forEach((line) => {
			const item = document.createElement("li");
			item.textContent = line;
			list.appendChild(item);
		});
		block.appendChild(list);
		wholeLifePlanPageContent.appendChild(block);
	});

	if (wholeLifePlanPrevBtn) {
		wholeLifePlanPrevBtn.disabled = safeIndex === 0;
	}
	if (wholeLifePlanNextBtn) {
		wholeLifePlanNextBtn.disabled = safeIndex === data.plans.length - 1;
	}
};

const renderTermPlanPage = (lang, planIndex) => {
	if (!translations[lang] || !termPlanPageContent) {
		return;
	}

	const data = translations[lang].termPlansDetail;
	const safeIndex = Math.max(0, Math.min(planIndex, data.plans.length - 1));
	activeTermPlanIndex = safeIndex;

	const selectedPlan = data.plans[safeIndex];
	if (!selectedPlan) {
		return;
	}

	if (termPlanPageTitle) {
		termPlanPageTitle.textContent = selectedPlan.title;
	}
	if (termPlanPageSummary) {
		termPlanPageSummary.textContent = selectedPlan.summary;
	}
	if (termPlanPageNote) {
		termPlanPageNote.textContent = selectedPlan.note;
	}
	if (termPlanWebsiteLabel) {
		termPlanWebsiteLabel.textContent = data.websiteLabel;
	}
	if (termPlanAskBtn) {
		setIconText("#termPlanAskBtn", "fa-brands fa-whatsapp", data.askButton);
	}
	if (termPlanPageBackBtn) {
		termPlanPageBackBtn.textContent = `⬅ ${data.pageBack}`;
	}

	termPlanPageContent.innerHTML = "";
	selectedPlan.sections.forEach((section) => {
		const block = document.createElement("article");
		block.className = "child-detail-block";

		const title = document.createElement("h6");
		title.textContent = section[0];
		block.appendChild(title);

		const list = document.createElement("ul");
		section[1].forEach((line) => {
			const item = document.createElement("li");
			item.textContent = line;
			list.appendChild(item);
		});
		block.appendChild(list);
		termPlanPageContent.appendChild(block);
	});

	if (termPlanPrevBtn) {
		termPlanPrevBtn.disabled = safeIndex === 0;
	}
	if (termPlanNextBtn) {
		termPlanNextBtn.disabled = safeIndex === data.plans.length - 1;
	}
};

const renderUlipPlanPage = (lang, planIndex) => {
	if (!translations[lang] || !ulipPlanPageContent) {
		return;
	}

	const data = translations[lang].ulipPlansDetail;
	const safeIndex = Math.max(0, Math.min(planIndex, data.plans.length - 1));
	activeUlipPlanIndex = safeIndex;

	const selectedPlan = data.plans[safeIndex];
	if (!selectedPlan) {
		return;
	}

	if (ulipPlanPageTitle) {
		ulipPlanPageTitle.textContent = selectedPlan.title;
	}
	if (ulipPlanPageSummary) {
		ulipPlanPageSummary.textContent = selectedPlan.summary;
	}
	if (ulipPlanPageNote) {
		ulipPlanPageNote.textContent = selectedPlan.note;
	}
	if (ulipPlanWebsiteLabel) {
		ulipPlanWebsiteLabel.textContent = data.websiteLabel;
	}
	if (ulipPlanAskBtn) {
		setIconText("#ulipPlanAskBtn", "fa-brands fa-whatsapp", data.askButton);
	}
	if (ulipPlanPageBackBtn) {
		ulipPlanPageBackBtn.textContent = `⬅ ${data.pageBack}`;
	}

	ulipPlanPageContent.innerHTML = "";
	selectedPlan.sections.forEach((section) => {
		const block = document.createElement("article");
		block.className = "child-detail-block";

		const title = document.createElement("h6");
		title.textContent = section[0];
		block.appendChild(title);

		const list = document.createElement("ul");
		section[1].forEach((line) => {
			const item = document.createElement("li");
			item.textContent = line;
			list.appendChild(item);
		});
		block.appendChild(list);
		ulipPlanPageContent.appendChild(block);
	});

	if (ulipPlanPrevBtn) {
		ulipPlanPrevBtn.disabled = safeIndex === 0;
	}
	if (ulipPlanNextBtn) {
		ulipPlanNextBtn.disabled = safeIndex === data.plans.length - 1;
	}
};

const renderMicroPlanPage = (lang, planIndex) => {
	if (!translations[lang] || !microPlanPageContent) {
		return;
	}

	const data = translations[lang].microPlansDetail;
	const safeIndex = Math.max(0, Math.min(planIndex, data.plans.length - 1));
	activeMicroPlanIndex = safeIndex;

	const selectedPlan = data.plans[safeIndex];
	if (!selectedPlan) {
		return;
	}

	if (microPlanPageTitle) {
		microPlanPageTitle.textContent = selectedPlan.title;
	}
	if (microPlanPageSummary) {
		microPlanPageSummary.textContent = selectedPlan.summary;
	}
	if (microPlanPageNote) {
		microPlanPageNote.textContent = selectedPlan.note;
	}
	if (microPlanWebsiteLabel) {
		microPlanWebsiteLabel.textContent = data.websiteLabel;
	}
	if (microPlanAskBtn) {
		setIconText("#microPlanAskBtn", "fa-brands fa-whatsapp", data.askButton);
	}
	if (microPlanPageBackBtn) {
		microPlanPageBackBtn.textContent = `⬅ ${data.pageBack}`;
	}

	microPlanPageContent.innerHTML = "";
	selectedPlan.sections.forEach((section) => {
		const block = document.createElement("article");
		block.className = "child-detail-block";

		const title = document.createElement("h6");
		title.textContent = section[0];
		block.appendChild(title);

		const list = document.createElement("ul");
		section[1].forEach((line) => {
			const item = document.createElement("li");
			item.textContent = line;
			list.appendChild(item);
		});
		block.appendChild(list);
		microPlanPageContent.appendChild(block);
	});

	if (microPlanPrevBtn) {
		microPlanPrevBtn.disabled = safeIndex === 0;
	}
	if (microPlanNextBtn) {
		microPlanNextBtn.disabled = safeIndex === data.plans.length - 1;
	}
};

const renderServiceDetail = (lang, serviceIndex) => {
	if (!translations[lang] || !serviceDetailContent) {
		return;
	}

	const data = translations[lang];
	const safeIndex = Math.max(0, Math.min(serviceIndex, data.serviceCards.length - 1));
	activeServiceIndex = safeIndex;

	const card = data.serviceCards[safeIndex];
	const detail = data.serviceDetails[safeIndex];
	const emoji = data.serviceEmojis[safeIndex] || "";
	if (!card || !detail) {
		return;
	}

	if (serviceDetailTitle) {
		serviceDetailTitle.textContent = `${emoji} ${card[0]}`.trim();
	}
	if (serviceDetailSummary) {
		serviceDetailSummary.textContent = detail.summary || card[1];
	}
	if (serviceDetailNote) {
		serviceDetailNote.textContent = data.serviceDetailNote;
	}
	if (serviceDetailBackBtn) {
		serviceDetailBackBtn.textContent = `⬅ ${data.serviceDetailBack}`;
	}

	serviceDetailContent.innerHTML = "";
	(detail.points || []).forEach((line) => {
		const block = document.createElement("article");
		block.className = "child-detail-block";

		const list = document.createElement("ul");
		const item = document.createElement("li");
		item.textContent = line;
		list.appendChild(item);
		block.appendChild(list);
		serviceDetailContent.appendChild(block);
	});

	if (serviceDetailPrevBtn) {
		serviceDetailPrevBtn.disabled = safeIndex === 0;
	}
	if (serviceDetailNextBtn) {
		serviceDetailNextBtn.disabled = safeIndex === data.serviceCards.length - 1;
	}
};

const renderBenefitDetail = (lang, benefitIndex) => {
	if (!translations[lang] || !benefitDetailContent) {
		return;
	}

	const data = translations[lang];
	const safeIndex = Math.max(0, Math.min(benefitIndex, data.benefitCards.length - 1));
	activeBenefitIndex = safeIndex;

	const card = data.benefitCards[safeIndex];
	const detail = data.benefitDetails[safeIndex];
	const emoji = data.benefitEmojis[safeIndex] || "";
	if (!card || !detail) {
		return;
	}

	if (benefitDetailTitle) {
		benefitDetailTitle.textContent = `${emoji} ${card[0]}`.trim();
	}
	if (benefitDetailSummary) {
		benefitDetailSummary.textContent = detail.summary || card[1];
	}
	if (benefitDetailNote) {
		benefitDetailNote.textContent = data.benefitDetailNote;
	}
	if (benefitDetailBackBtn) {
		benefitDetailBackBtn.textContent = `⬅ ${data.benefitDetailBack}`;
	}

	benefitDetailContent.innerHTML = "";
	(detail.points || []).forEach((line) => {
		const block = document.createElement("article");
		block.className = "child-detail-block";

		const list = document.createElement("ul");
		const item = document.createElement("li");
		item.textContent = line;
		list.appendChild(item);
		block.appendChild(list);
		benefitDetailContent.appendChild(block);
	});

	if (benefitDetailPrevBtn) {
		benefitDetailPrevBtn.disabled = safeIndex === 0;
	}
	if (benefitDetailNextBtn) {
		benefitDetailNextBtn.disabled = safeIndex === data.benefitCards.length - 1;
	}
};

const renderChooseDetail = (lang, chooseIndex) => {
	if (!translations[lang] || !chooseDetailContent) {
		return;
	}

	const data = translations[lang];
	const safeIndex = Math.max(0, Math.min(chooseIndex, data.chooseCards.length - 1));
	activeChooseIndex = safeIndex;

	const card = data.chooseCards[safeIndex];
	const detail = data.chooseDetails[safeIndex];
	const emoji = data.chooseEmojis[safeIndex] || "";
	if (!card || !detail) {
		return;
	}

	if (chooseDetailTitle) {
		chooseDetailTitle.textContent = `${emoji} ${card[0]}`.trim();
	}
	if (chooseDetailSummary) {
		chooseDetailSummary.textContent = detail.summary || card[1];
	}
	if (chooseDetailNote) {
		chooseDetailNote.textContent = data.chooseDetailNote;
	}
	if (chooseDetailBackBtn) {
		chooseDetailBackBtn.textContent = `⬅ ${data.chooseDetailBack}`;
	}

	chooseDetailContent.innerHTML = "";
	(detail.points || []).forEach((line) => {
		const block = document.createElement("article");
		block.className = "child-detail-block";

		const list = document.createElement("ul");
		const item = document.createElement("li");
		item.textContent = line;
		list.appendChild(item);
		block.appendChild(list);
		chooseDetailContent.appendChild(block);
	});

	if (chooseDetailPrevBtn) {
		chooseDetailPrevBtn.disabled = safeIndex === 0;
	}
	if (chooseDetailNextBtn) {
		chooseDetailNextBtn.disabled = safeIndex === data.chooseCards.length - 1;
	}
};

const updateLanguageButtons = (lang) => {
	if (langEnButton) {
		langEnButton.classList.toggle("active", lang === "en");
	}
	if (langTeButton) {
		langTeButton.classList.toggle("active", lang === "te");
	}
};

const applyLanguage = (lang) => {
	const selected = translations[lang] ? lang : "en";
	const t = translations[selected];

	document.documentElement.lang = selected === "te" ? "te" : "en";

	setListText(".nav-menu a", t.nav);
	setIconText(".nav-whatsapp-btn", "fa-brands fa-whatsapp", t.whatsappNav);

	setText(".hero-content .eyebrow", t.heroEyebrow);
	setText(".hero-content h1", t.heroTitle);
	setText(".hero-content h2", t.heroName);
	setText(".hero-subtitle", t.heroSubtitle);

	const heroIntro = document.querySelectorAll(".hero-intro");
	if (heroIntro[0]) {
		heroIntro[0].textContent = t.heroIntro1;
	}
	if (heroIntro[1]) {
		heroIntro[1].textContent = t.heroIntro2;
	}

	setIconText(".hero-cta-group a:nth-child(1)", "fa-solid fa-phone", t.heroButtons[0]);
	setIconText(".hero-cta-group a:nth-child(2)", "fa-brands fa-whatsapp", t.heroButtons[1]);
	setIconText(".hero-cta-group a:nth-child(3)", "", t.heroButtons[2]);

	setIconText(".trust-badges span:nth-child(1)", "fa-solid fa-circle-check", t.trustBadges[0]);
	setIconText(".trust-badges span:nth-child(2)", "fa-solid fa-shield-heart", t.trustBadges[1]);
	setIconText(".trust-badges span:nth-child(3)", "fa-solid fa-bolt", t.trustBadges[2]);

	setText("#about .eyebrow", t.aboutEyebrow);
	setText("#about h3", t.aboutTitle);

	const aboutParagraphs = document.querySelectorAll(".about-content > p");
	if (aboutParagraphs[1]) {
		aboutParagraphs[1].textContent = t.aboutP1;
	}
	if (aboutParagraphs[2]) {
		aboutParagraphs[2].textContent = t.aboutP2;
	}

	setText("#showcase .eyebrow", t.showcaseEyebrow);
	setText("#showcase .section-title", t.showcaseTitle);
	setText("#showcase .showcase-subtitle", t.showcaseSubtitle);

	const showcaseTitles = document.querySelectorAll("#showcase .showcase-content h4");
	const showcaseTexts = document.querySelectorAll("#showcase .showcase-content p");
	showcaseTitles.forEach((item, index) => {
		if (t.showcaseCards[index]) {
			item.textContent = t.showcaseCards[index][0];
		}
	});
	showcaseTexts.forEach((item, index) => {
		if (t.showcaseCards[index]) {
			item.textContent = t.showcaseCards[index][1];
		}
	});

	setText("#services .eyebrow", t.servicesEyebrow);
	setText("#services .section-title", t.servicesTitle);

	const serviceTitles = document.querySelectorAll("#services .info-card h4");
	const serviceTexts = document.querySelectorAll("#services .info-card p");
	serviceTitles.forEach((item, index) => {
		if (t.serviceCards[index]) {
			const emoji = t.serviceEmojis[index] || "";
			item.textContent = `${emoji} ${t.serviceCards[index][0]}`.trim();
		}
	});
	serviceTexts.forEach((item, index) => {
		if (t.serviceCards[index]) {
			item.textContent = t.serviceCards[index][1];
		}
	});

	setText("#plans .eyebrow", t.plansEyebrow);
	setText("#plans .section-title", t.plansTitle);
	setText("#plans .plan-subtitle", t.plansSubtitle);

	const planTitles = document.querySelectorAll("#plans .premium-card h4");
	planTitles.forEach((item, index) => {
		if (t.planCards[index]) {
			item.textContent = t.planCards[index];
		}
	});

	setText("#childPlansBackBtn", `⬅ ${t.childPlansDetail.back}`);
	setText("#childPlansTitle", t.childPlansDetail.title);
	setText("#childPlansSubtitle", t.childPlansDetail.subtitle);

	const childPlanLocalTitles = document.querySelectorAll("#childPlansDetail .child-plan-card h5");
	const childPlanLocalTexts = document.querySelectorAll("#childPlansDetail .child-plan-card p");
	childPlanLocalTitles.forEach((item, index) => {
		if (t.childPlansDetail.cards[index]) {
			item.textContent = t.childPlansDetail.cards[index][0];
		}
	});
	childPlanLocalTexts.forEach((item, index) => {
		if (t.childPlansDetail.cards[index]) {
			item.textContent = t.childPlansDetail.cards[index][1];
		}
	});

	setText("#endowmentPlansBackBtn", `⬅ ${t.endowmentPlansDetail.back}`);
	setText("#endowmentPlansTitle", t.endowmentPlansDetail.title);
	setText("#endowmentPlansSubtitle", t.endowmentPlansDetail.subtitle);

	const endowmentCardTitles = document.querySelectorAll(".endowment-plan-card h5");
	const endowmentCardTexts = document.querySelectorAll(".endowment-plan-card p");
	endowmentCardTitles.forEach((item, index) => {
		if (t.endowmentPlansDetail.cards[index]) {
			item.textContent = t.endowmentPlansDetail.cards[index][0];
		}
	});
	endowmentCardTexts.forEach((item, index) => {
		if (t.endowmentPlansDetail.cards[index]) {
			item.textContent = t.endowmentPlansDetail.cards[index][1];
		}
	});

	setText("#pensionPlansBackBtn", `⬅ ${t.pensionPlansDetail.back}`);
	setText("#pensionPlansTitle", t.pensionPlansDetail.title);
	setText("#pensionPlansSubtitle", t.pensionPlansDetail.subtitle);

	const pensionCardTitles = document.querySelectorAll("[data-pension-plan-index] h5");
	const pensionCardTexts = document.querySelectorAll("[data-pension-plan-index] p");
	pensionCardTitles.forEach((item, index) => {
		if (t.pensionPlansDetail.cards[index]) {
			item.textContent = t.pensionPlansDetail.cards[index][0];
		}
	});
	pensionCardTexts.forEach((item, index) => {
		if (t.pensionPlansDetail.cards[index]) {
			item.textContent = t.pensionPlansDetail.cards[index][1];
		}
	});

	setText("#moneyBackPlansBackBtn", `⬅ ${t.moneyBackPlansDetail.back}`);
	setText("#moneyBackPlansTitle", t.moneyBackPlansDetail.title);
	setText("#moneyBackPlansSubtitle", t.moneyBackPlansDetail.subtitle);

	const moneyBackCardTitles = document.querySelectorAll("[data-moneyback-plan-index] h5");
	const moneyBackCardTexts = document.querySelectorAll("[data-moneyback-plan-index] p");
	moneyBackCardTitles.forEach((item, index) => {
		if (t.moneyBackPlansDetail.cards[index]) {
			item.textContent = t.moneyBackPlansDetail.cards[index][0];
		}
	});
	moneyBackCardTexts.forEach((item, index) => {
		if (t.moneyBackPlansDetail.cards[index]) {
			item.textContent = t.moneyBackPlansDetail.cards[index][1];
		}
	});

	setText("#wholeLifePlansBackBtn", `⬅ ${t.wholeLifePlansDetail.back}`);
	setText("#wholeLifePlansTitle", t.wholeLifePlansDetail.title);
	setText("#wholeLifePlansSubtitle", t.wholeLifePlansDetail.subtitle);

	const wholeLifeCardTitles = document.querySelectorAll("[data-wholelife-plan-index] h5");
	const wholeLifeCardTexts = document.querySelectorAll("[data-wholelife-plan-index] p");
	wholeLifeCardTitles.forEach((item, index) => {
		if (t.wholeLifePlansDetail.cards[index]) {
			item.textContent = t.wholeLifePlansDetail.cards[index][0];
		}
	});
	wholeLifeCardTexts.forEach((item, index) => {
		if (t.wholeLifePlansDetail.cards[index]) {
			item.textContent = t.wholeLifePlansDetail.cards[index][1];
		}
	});

	setText("#termPlansBackBtn", `⬅ ${t.termPlansDetail.back}`);
	setText("#termPlansTitle", t.termPlansDetail.title);
	setText("#termPlansSubtitle", t.termPlansDetail.subtitle);

	const termCardTitles = document.querySelectorAll("[data-term-plan-index] h5");
	const termCardTexts = document.querySelectorAll("[data-term-plan-index] p");
	termCardTitles.forEach((item, index) => {
		if (t.termPlansDetail.cards[index]) {
			item.textContent = t.termPlansDetail.cards[index][0];
		}
	});
	termCardTexts.forEach((item, index) => {
		if (t.termPlansDetail.cards[index]) {
			item.textContent = t.termPlansDetail.cards[index][1];
		}
	});

	setText("#ulipPlansBackBtn", `⬅ ${t.ulipPlansDetail.back}`);
	setText("#ulipPlansTitle", t.ulipPlansDetail.title);
	setText("#ulipPlansSubtitle", t.ulipPlansDetail.subtitle);

	const ulipCardTitles = document.querySelectorAll("[data-ulip-plan-index] h5");
	const ulipCardTexts = document.querySelectorAll("[data-ulip-plan-index] p");
	ulipCardTitles.forEach((item, index) => {
		if (t.ulipPlansDetail.cards[index]) {
			item.textContent = t.ulipPlansDetail.cards[index][0];
		}
	});
	ulipCardTexts.forEach((item, index) => {
		if (t.ulipPlansDetail.cards[index]) {
			item.textContent = t.ulipPlansDetail.cards[index][1];
		}
	});

	setText("#microPlansBackBtn", `⬅ ${t.microPlansDetail.back}`);
	setText("#microPlansTitle", t.microPlansDetail.title);
	setText("#microPlansSubtitle", t.microPlansDetail.subtitle);

	const microCardTitles = document.querySelectorAll("[data-micro-plan-index] h5");
	const microCardTexts = document.querySelectorAll("[data-micro-plan-index] p");
	microCardTitles.forEach((item, index) => {
		if (t.microPlansDetail.cards[index]) {
			item.textContent = t.microPlansDetail.cards[index][0];
		}
	});
	microCardTexts.forEach((item, index) => {
		if (t.microPlansDetail.cards[index]) {
			item.textContent = t.microPlansDetail.cards[index][1];
		}
	});

	setText("#benefits .eyebrow", t.benefitsEyebrow);
	setText("#benefits .section-title", t.benefitsTitle);
	setText("#benefits .container > p.text-center", t.benefitsSubtitle);

	const benefitTitles = document.querySelectorAll("#benefits .benefit-card h4");
	const benefitTexts = document.querySelectorAll("#benefits .benefit-card p");
	benefitTitles.forEach((item, index) => {
		if (t.benefitCards[index]) {
			const emoji = t.benefitEmojis[index] || "";
			item.textContent = `${emoji} ${t.benefitCards[index][0]}`.trim();
		}
	});
	benefitTexts.forEach((item, index) => {
		if (t.benefitCards[index]) {
			item.textContent = t.benefitCards[index][1];
		}
	});

	const benefitsNote = document.querySelector("#benefits small");
	if (benefitsNote) {
		benefitsNote.textContent = t.benefitsNote;
	}

	setText(".choose-section .eyebrow", t.chooseEyebrow);
	setText(".choose-section .section-title", t.chooseTitle);

	const chooseTitles = document.querySelectorAll(".choose-section .feature-card h4");
	const chooseTexts = document.querySelectorAll(".choose-section .feature-card p");
	chooseTitles.forEach((item, index) => {
		if (t.chooseCards[index]) {
			const emoji = t.chooseEmojis[index] || "";
			item.textContent = `${emoji} ${t.chooseCards[index][0]}`.trim();
		}
	});
	chooseTexts.forEach((item, index) => {
		if (t.chooseCards[index]) {
			item.textContent = t.chooseCards[index][1];
		}
	});

	setText(".how-section .eyebrow", t.howEyebrow);
	setText(".how-section .section-title", t.howTitle);

	const howTitles = document.querySelectorAll(".how-section .step-card h4");
	const howTexts = document.querySelectorAll(".how-section .step-card p");
	howTitles.forEach((item, index) => {
		if (t.howCards[index]) {
			item.textContent = t.howCards[index][0];
		}
	});
	howTexts.forEach((item, index) => {
		if (t.howCards[index]) {
			item.textContent = t.howCards[index][1];
		}
	});

	setText("#faq .eyebrow", t.faqEyebrow);
	setText("#faq .section-title", t.faqTitle);

	const faqQuestionTexts = document.querySelectorAll("#faq .faq-question-text");
	const faqAnswerTexts = document.querySelectorAll("#faq .faq-answer p");
	faqQuestionTexts.forEach((item, index) => {
		if (t.faqItems[index]) {
			item.textContent = t.faqItems[index][0];
		}
	});
	faqAnswerTexts.forEach((item, index) => {
		if (t.faqItems[index]) {
			item.textContent = t.faqItems[index][1];
		}
	});

	setText("#contact .eyebrow", t.contactEyebrow);
	setText("#contact .contact-details h3", t.contactTitle);

	const contactDetailsParagraphs = document.querySelectorAll("#contact .contact-details > p");
	if (contactDetailsParagraphs[1]) {
		contactDetailsParagraphs[1].textContent = t.contactP1;
	}
	if (contactDetailsParagraphs[2]) {
		contactDetailsParagraphs[2].textContent = t.contactP2;
	}

	setListText(".lead-form label", t.formLabels);

	const nameInput = document.getElementById("name");
	const phoneInput = document.getElementById("phone");
	const cityInput = document.getElementById("city");
	const messageInput = document.getElementById("message");

	if (nameInput) {
		nameInput.placeholder = t.formPlaceholders[0];
	}
	if (phoneInput) {
		phoneInput.placeholder = t.formPlaceholders[1];
	}
	if (cityInput) {
		cityInput.placeholder = t.formPlaceholders[2];
	}
	if (messageInput) {
		messageInput.placeholder = t.formPlaceholders[3];
	}

	const interestSelect = document.getElementById("interest");
	if (interestSelect) {
		const options = interestSelect.querySelectorAll("option");
		if (options[0]) {
			options[0].textContent = t.interestDefault;
		}
		for (let i = 1; i < options.length; i += 1) {
			if (t.interestOptions[i - 1]) {
				options[i].textContent = t.interestOptions[i - 1];
			}
		}
	}

	const formSubmitButton = document.querySelector(".form-actions button[type='submit']");
	if (formSubmitButton) {
		formSubmitButton.textContent = t.formSubmit;
	}

	setIconText(".form-actions a.btn-outline", "fa-solid fa-phone", t.callNow);
	setIconText(".form-actions a.btn-whatsapp", "fa-brands fa-whatsapp", t.whatsappBtn);

	updateLanguageButtons(selected);
	currentLanguage = selected;
	if (childPlanPage && !childPlanPage.hidden) {
		renderChildPlanPage(selected, activeChildPlanIndex);
	}
	if (endowmentPlanPage && !endowmentPlanPage.hidden) {
		renderEndowmentPlanPage(selected, activeEndowmentPlanIndex);
	}
	if (pensionPlanPage && !pensionPlanPage.hidden) {
		renderPensionPlanPage(selected, activePensionPlanIndex);
	}
	if (moneyBackPlanPage && !moneyBackPlanPage.hidden) {
		renderMoneyBackPlanPage(selected, activeMoneyBackPlanIndex);
	}
	if (wholeLifePlanPage && !wholeLifePlanPage.hidden) {
		renderWholeLifePlanPage(selected, activeWholeLifePlanIndex);
	}
	if (termPlanPage && !termPlanPage.hidden) {
		renderTermPlanPage(selected, activeTermPlanIndex);
	}
	if (ulipPlanPage && !ulipPlanPage.hidden) {
		renderUlipPlanPage(selected, activeUlipPlanIndex);
	}
	if (microPlanPage && !microPlanPage.hidden) {
		renderMicroPlanPage(selected, activeMicroPlanIndex);
	}
	if (benefitDetail && !benefitDetail.hidden) {
		renderBenefitDetail(selected, activeBenefitIndex);
	}
	if (chooseDetail && !chooseDetail.hidden) {
		renderChooseDetail(selected, activeChooseIndex);
	}
	if (serviceDetail && !serviceDetail.hidden) {
		renderServiceDetail(selected, activeServiceIndex);
	}
	localStorage.setItem("preferredLanguage", selected);
};

const setupFaqAccordion = () => {
	const faqItems = Array.from(document.querySelectorAll("#faq .faq-item"));
	if (!faqItems.length) {
		return;
	}

	faqItems.forEach((item, index) => {
		const button = item.querySelector(".faq-question");
		const answer = item.querySelector(".faq-answer");
		if (!button || !answer) {
			return;
		}

		const setOpen = (open) => {
			item.classList.toggle("open", open);
			button.setAttribute("aria-expanded", String(open));
			answer.hidden = !open;
		};

		setOpen(index === 0);

		button.addEventListener("click", () => {
			const isOpen = item.classList.contains("open");
			faqItems.forEach((node) => {
				const nodeButton = node.querySelector(".faq-question");
				const nodeAnswer = node.querySelector(".faq-answer");
				if (!nodeButton || !nodeAnswer) {
					return;
				}

				node.classList.remove("open");
				nodeButton.setAttribute("aria-expanded", "false");
				nodeAnswer.hidden = true;
			});

			if (!isOpen) {
				setOpen(true);
			}
		});
	});
};

const setupLanguageSwitcher = () => {
	if (langEnButton) {
		langEnButton.addEventListener("click", () => applyLanguage("en"));
	}

	if (langTeButton) {
		langTeButton.addEventListener("click", () => applyLanguage("te"));
	}

	const savedLanguage = localStorage.getItem("preferredLanguage") || "en";
	applyLanguage(savedLanguage);
};

const setupScrollReveal = () => {
	const revealTargets = document.querySelectorAll(
		".section-padding .eyebrow, .section-padding h3, .section-padding .section-title, .about-content p, .showcase-subtitle, .trust-card, .info-card, .premium-card, .benefit-card, .feature-card, .step-card, .lead-form, .contact-details, .showcase-card, .hero-image-card, .about-image-wrapper, .about-stats-panel, .stat-pill, .faq-item, .child-plan-card, .child-plan-page, .service-detail, .benefit-detail, .choose-detail, .footer-grid > *"
	);

	revealTargets.forEach((element, index) => {
		element.classList.add("reveal-on-scroll");
		element.style.transitionDelay = `${Math.min((index % 6) * 70, 300)}ms`;
	});

	const revealObserver = new IntersectionObserver(
		(entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("visible");
					observer.unobserve(entry.target);
				}
			});
		},
		{
			threshold: 0.12,
			rootMargin: "0px 0px -8% 0px"
		}
	);

	revealTargets.forEach((element) => revealObserver.observe(element));
};

const setupTrustBadgeEntrance = () => {
	const badges = document.querySelectorAll(".trust-badges span");
	badges.forEach((badge, index) => {
		badge.classList.add("badge-entrance");
		badge.style.animationDelay = `${150 + index * 130}ms`;
	});
};

const animateStatCounter = (counterElement) => {
	const target = Number(counterElement.dataset.target || "0");
	const suffix = counterElement.dataset.suffix || "";
	if (!Number.isFinite(target) || target <= 0) {
		counterElement.textContent = `0${suffix}`;
		return;
	}

	const duration = 1700;
	const startTime = performance.now();

	const tick = (now) => {
		const elapsed = now - startTime;
		const progress = Math.min(elapsed / duration, 1);
		const eased = 1 - Math.pow(1 - progress, 3);
		const current = Math.round(target * eased);

		counterElement.textContent = `${current}${suffix}`;

		if (progress < 1) {
			window.requestAnimationFrame(tick);
		}
	};

	window.requestAnimationFrame(tick);
};

const setupStatsCounterAnimation = () => {
	const counterElements = Array.from(document.querySelectorAll(".about-stats-panel .stat-value[data-target]"));
	if (!counterElements.length) {
		return;
	}

	const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	if (prefersReducedMotion) {
		counterElements.forEach((element) => {
			const target = Number(element.dataset.target || "0");
			const suffix = element.dataset.suffix || "";
			element.textContent = `${Math.max(0, Math.round(target))}${suffix}`;
		});
		return;
	}

	const observer = new IntersectionObserver(
		(entries, io) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) {
					return;
				}

				counterElements.forEach((element, index) => {
					window.setTimeout(() => animateStatCounter(element), index * 120);
				});
				io.disconnect();
			});
		},
		{
			threshold: 0.35,
			rootMargin: "0px 0px -10% 0px"
		}
	);

	const panel = document.querySelector(".about-stats-panel");
	if (panel) {
		observer.observe(panel);
	}
};

const validateLeadForm = () => {
	if (!leadForm) {
		return { valid: false, data: null, message: "Form not found." };
	}

	const name = leadForm.name.value.trim();
	const phone = leadForm.phone.value.trim();
	const city = leadForm.city.value.trim();
	const interest = leadForm.interest.value;
	const message = leadForm.message.value.trim();

	if (name.length < 2) {
		return { valid: false, data: null, message: "Please enter a valid name." };
	}

	if (!/^\d{10,13}$/.test(phone.replace(/\s+/g, ""))) {
		return { valid: false, data: null, message: "Please enter a valid phone number." };
	}

	if (city.length < 2) {
		return { valid: false, data: null, message: "Please enter your city." };
	}

	if (!interest) {
		return { valid: false, data: null, message: "Please select what you are interested in." };
	}

	return {
		valid: true,
		data: {
			name,
			phone,
			city,
			interest,
			message: message || "Not specified"
		}
	};
};

const setupLeadFormHandler = () => {
	if (!leadForm) {
		return;
	}

	// Create a small helper text area for form feedback.
	const statusEl = document.createElement("p");
	statusEl.id = "formStatus";
	statusEl.style.marginTop = "0.65rem";
	statusEl.style.fontSize = "0.9rem";
	statusEl.style.fontWeight = "600";
	leadForm.appendChild(statusEl);

	leadForm.addEventListener("submit", (event) => {
		event.preventDefault();

		const result = validateLeadForm();
		if (!result.valid || !result.data) {
			statusEl.textContent = result.message || "Please check your details.";
			statusEl.style.color = "#e63946";
			return;
		}

		const interestMap = {
			"lic-plan": "LIC Plan Guidance",
			"health-plan": "Health Insurance Plan",
			"policy-service": "Policy Service Support",
			"claim-help": "Claim Assistance"
		};

		const enquiry = result.data;
		const selectedInterest = interestMap[enquiry.interest] || enquiry.interest;
		const prefilledText = [
			"Hello Nooka Santosh Kumar,",
			"I am interested in insurance guidance.",
			"",
			`Name: ${enquiry.name}`,
			`Phone: ${enquiry.phone}`,
			`City: ${enquiry.city}`,
			`Interested In: ${selectedInterest}`,
			`Message: ${enquiry.message}`,
			"",
			"Please guide me with suitable options."
		].join("\n");

		const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(prefilledText)}`;
		statusEl.textContent = "Redirecting to WhatsApp...";
		statusEl.style.color = "#0b4f9c";

		window.location.href = whatsappUrl;
	});
};

const setupEventListeners = () => {
	if (mobileMenuToggle) {
		mobileMenuToggle.addEventListener("click", toggleMobileMenu);
	}

	if (brandLogo) {
		brandLogo.addEventListener("click", (event) => {
			event.preventDefault();
			window.scrollTo({ top: 0, behavior: "smooth" });
			closeMobileMenu();
		});
	}

	navLinks.forEach((link) => {
		link.addEventListener("click", (event) => {
			const targetId = link.getAttribute("href");
			if (!targetId || !targetId.startsWith("#")) {
				return;
			}

			const targetSection = document.querySelector(targetId);
			if (!targetSection) {
				return;
			}

			event.preventDefault();
			smoothScrollTo(targetSection);
			closeMobileMenu();
		});
	});

	document.addEventListener("click", (event) => {
		if (!primaryMenu || !mobileMenuToggle) {
			return;
		}

		const clickedInsideMenu = primaryMenu.contains(event.target);
		const clickedToggle = mobileMenuToggle.contains(event.target);

		if (!clickedInsideMenu && !clickedToggle) {
			closeMobileMenu();
		}
	});

	document.addEventListener("keydown", (event) => {
		if (event.key === "Escape") {
			closeMobileMenu();
		}
	});

	window.addEventListener("scroll", updateHeaderAndBackToTopState, { passive: true });

	window.addEventListener("resize", () => {
		if (window.innerWidth >= 992) {
			closeMobileMenu();
		}
	});

	if (backToTopButton) {
		backToTopButton.addEventListener("click", () => {
			window.scrollTo({ top: 0, behavior: "smooth" });
		});
	}

	if (serviceCards.length && serviceDetail) {
		serviceCards.forEach((card, index) => {
			const openServiceDetail = () => {
				renderServiceDetail(currentLanguage, index);
				serviceDetail.hidden = false;
				smoothScrollTo(serviceDetail);
			};

			card.addEventListener("click", openServiceDetail);
			card.addEventListener("keydown", (event) => {
				if (event.key === "Enter" || event.key === " ") {
					event.preventDefault();
					openServiceDetail();
				}
			});
		});
	}

	if (serviceDetailBackBtn && serviceDetail) {
		serviceDetailBackBtn.addEventListener("click", () => {
			serviceDetail.hidden = true;
			smoothScrollTo(document.getElementById("services"));
		});
	}

	if (serviceDetailPrevBtn && serviceDetail) {
		serviceDetailPrevBtn.addEventListener("click", () => {
			renderServiceDetail(currentLanguage, activeServiceIndex - 1);
			smoothScrollTo(serviceDetail);
		});
	}

	if (serviceDetailNextBtn && serviceDetail) {
		serviceDetailNextBtn.addEventListener("click", () => {
			renderServiceDetail(currentLanguage, activeServiceIndex + 1);
			smoothScrollTo(serviceDetail);
		});
	}

	if (benefitCards.length && benefitDetail) {
		benefitCards.forEach((card, index) => {
			const openBenefitDetail = () => {
				renderBenefitDetail(currentLanguage, index);
				benefitDetail.hidden = false;
				smoothScrollTo(benefitDetail);
			};

			card.addEventListener("click", openBenefitDetail);
			card.addEventListener("keydown", (event) => {
				if (event.key === "Enter" || event.key === " ") {
					event.preventDefault();
					openBenefitDetail();
				}
			});
		});
	}

	if (benefitDetailBackBtn && benefitDetail) {
		benefitDetailBackBtn.addEventListener("click", () => {
			benefitDetail.hidden = true;
			smoothScrollTo(document.getElementById("benefits"));
		});
	}

	if (benefitDetailPrevBtn && benefitDetail) {
		benefitDetailPrevBtn.addEventListener("click", () => {
			renderBenefitDetail(currentLanguage, activeBenefitIndex - 1);
			smoothScrollTo(benefitDetail);
		});
	}

	if (benefitDetailNextBtn && benefitDetail) {
		benefitDetailNextBtn.addEventListener("click", () => {
			renderBenefitDetail(currentLanguage, activeBenefitIndex + 1);
			smoothScrollTo(benefitDetail);
		});
	}

	if (chooseFeatureCards.length && chooseDetail) {
		chooseFeatureCards.forEach((card, index) => {
			const openChooseDetail = () => {
				renderChooseDetail(currentLanguage, index);
				chooseDetail.hidden = false;
				smoothScrollTo(chooseDetail);
			};

			card.addEventListener("click", openChooseDetail);
			card.addEventListener("keydown", (event) => {
				if (event.key === "Enter" || event.key === " ") {
					event.preventDefault();
					openChooseDetail();
				}
			});
		});
	}

	if (chooseDetailBackBtn && chooseDetail) {
		chooseDetailBackBtn.addEventListener("click", () => {
			chooseDetail.hidden = true;
			smoothScrollTo(document.querySelector(".choose-section"));
		});
	}

	if (chooseDetailPrevBtn && chooseDetail) {
		chooseDetailPrevBtn.addEventListener("click", () => {
			renderChooseDetail(currentLanguage, activeChooseIndex - 1);
			smoothScrollTo(chooseDetail);
		});
	}

	if (chooseDetailNextBtn && chooseDetail) {
		chooseDetailNextBtn.addEventListener("click", () => {
			renderChooseDetail(currentLanguage, activeChooseIndex + 1);
			smoothScrollTo(chooseDetail);
		});
	}

	const hideUlipViews = () => {
		if (ulipPlansDetail) {
			ulipPlansDetail.hidden = true;
		}
		if (ulipPlanPage) {
			ulipPlanPage.hidden = true;
		}
	};

	const hideMicroViews = () => {
		if (microPlansDetail) {
			microPlansDetail.hidden = true;
		}
		if (microPlanPage) {
			microPlanPage.hidden = true;
		}
	};

	[childPlanTrigger, endowmentPlanTrigger, pensionPlanTrigger, moneyBackPlanTrigger, wholeLifePlanTrigger, termPlanTrigger, ulipPlanTrigger, microPlanTrigger].forEach(
		(trigger) => {
			if (!trigger) {
				return;
			}

			trigger.addEventListener("click", hideUlipViews);
			trigger.addEventListener("click", hideMicroViews);
			trigger.addEventListener("keydown", (event) => {
				if (event.key === "Enter" || event.key === " ") {
					hideUlipViews();
					hideMicroViews();
				}
			});
		}
	);

	if (childPlanTrigger && childPlansDetail) {
		childPlanTrigger.addEventListener("click", () => {
			childPlansDetail.hidden = false;
			if (endowmentPlansDetail) {
				endowmentPlansDetail.hidden = true;
			}
			if (pensionPlansDetail) {
				pensionPlansDetail.hidden = true;
			}
			if (moneyBackPlansDetail) {
				moneyBackPlansDetail.hidden = true;
			}
			if (wholeLifePlansDetail) {
				wholeLifePlansDetail.hidden = true;
			}
			if (termPlansDetail) {
				termPlansDetail.hidden = true;
			}
			if (childPlanPage) {
				childPlanPage.hidden = true;
			}
			if (endowmentPlanPage) {
				endowmentPlanPage.hidden = true;
			}
			if (pensionPlanPage) {
				pensionPlanPage.hidden = true;
			}
			if (moneyBackPlanPage) {
				moneyBackPlanPage.hidden = true;
			}
			if (wholeLifePlanPage) {
				wholeLifePlanPage.hidden = true;
			}
			if (termPlanPage) {
				termPlanPage.hidden = true;
			}
			smoothScrollTo(childPlansDetail);
		});

		childPlanTrigger.addEventListener("keydown", (event) => {
			if (event.key === "Enter" || event.key === " ") {
				event.preventDefault();
				childPlansDetail.hidden = false;
				if (endowmentPlansDetail) {
					endowmentPlansDetail.hidden = true;
				}
				if (pensionPlansDetail) {
					pensionPlansDetail.hidden = true;
				}
				if (moneyBackPlansDetail) {
					moneyBackPlansDetail.hidden = true;
				}
				if (wholeLifePlansDetail) {
					wholeLifePlansDetail.hidden = true;
				}
				if (termPlansDetail) {
					termPlansDetail.hidden = true;
				}
				if (childPlanPage) {
					childPlanPage.hidden = true;
				}
				if (endowmentPlanPage) {
					endowmentPlanPage.hidden = true;
				}
				if (pensionPlanPage) {
					pensionPlanPage.hidden = true;
				}
				if (moneyBackPlanPage) {
					moneyBackPlanPage.hidden = true;
				}
				if (wholeLifePlanPage) {
					wholeLifePlanPage.hidden = true;
				}
				if (termPlanPage) {
					termPlanPage.hidden = true;
				}
				smoothScrollTo(childPlansDetail);
			}
		});
	}

	if (childPlansBackBtn && childPlansDetail) {
		childPlansBackBtn.addEventListener("click", () => {
			childPlansDetail.hidden = true;
			if (childPlanPage) {
				childPlanPage.hidden = true;
			}
			smoothScrollTo(document.getElementById("plans"));
		});
	}

	if (endowmentPlanTrigger && endowmentPlansDetail) {
		endowmentPlanTrigger.addEventListener("click", () => {
			endowmentPlansDetail.hidden = false;
			if (childPlansDetail) {
				childPlansDetail.hidden = true;
			}
			if (pensionPlansDetail) {
				pensionPlansDetail.hidden = true;
			}
			if (moneyBackPlansDetail) {
				moneyBackPlansDetail.hidden = true;
			}
			if (wholeLifePlansDetail) {
				wholeLifePlansDetail.hidden = true;
			}
			if (termPlansDetail) {
				termPlansDetail.hidden = true;
			}
			if (childPlanPage) {
				childPlanPage.hidden = true;
			}
			if (endowmentPlanPage) {
				endowmentPlanPage.hidden = true;
			}
			if (pensionPlanPage) {
				pensionPlanPage.hidden = true;
			}
			if (moneyBackPlanPage) {
				moneyBackPlanPage.hidden = true;
			}
			if (wholeLifePlanPage) {
				wholeLifePlanPage.hidden = true;
			}
			if (termPlanPage) {
				termPlanPage.hidden = true;
			}
			smoothScrollTo(endowmentPlansDetail);
		});

		endowmentPlanTrigger.addEventListener("keydown", (event) => {
			if (event.key === "Enter" || event.key === " ") {
				event.preventDefault();
				endowmentPlansDetail.hidden = false;
				if (childPlansDetail) {
					childPlansDetail.hidden = true;
				}
				if (pensionPlansDetail) {
					pensionPlansDetail.hidden = true;
				}
				if (moneyBackPlansDetail) {
					moneyBackPlansDetail.hidden = true;
				}
				if (wholeLifePlansDetail) {
					wholeLifePlansDetail.hidden = true;
				}
				if (termPlansDetail) {
					termPlansDetail.hidden = true;
				}
				if (childPlanPage) {
					childPlanPage.hidden = true;
				}
				if (endowmentPlanPage) {
					endowmentPlanPage.hidden = true;
				}
				if (pensionPlanPage) {
					pensionPlanPage.hidden = true;
				}
				if (moneyBackPlanPage) {
					moneyBackPlanPage.hidden = true;
				}
				if (wholeLifePlanPage) {
					wholeLifePlanPage.hidden = true;
				}
				if (termPlanPage) {
					termPlanPage.hidden = true;
				}
				smoothScrollTo(endowmentPlansDetail);
			}
		});
	}

	if (pensionPlanTrigger && pensionPlansDetail) {
		pensionPlanTrigger.addEventListener("click", () => {
			pensionPlansDetail.hidden = false;
			if (childPlansDetail) {
				childPlansDetail.hidden = true;
			}
			if (endowmentPlansDetail) {
				endowmentPlansDetail.hidden = true;
			}
			if (moneyBackPlansDetail) {
				moneyBackPlansDetail.hidden = true;
			}
			if (wholeLifePlansDetail) {
				wholeLifePlansDetail.hidden = true;
			}
			if (termPlansDetail) {
				termPlansDetail.hidden = true;
			}
			if (childPlanPage) {
				childPlanPage.hidden = true;
			}
			if (endowmentPlanPage) {
				endowmentPlanPage.hidden = true;
			}
			if (pensionPlanPage) {
				pensionPlanPage.hidden = true;
			}
			if (moneyBackPlanPage) {
				moneyBackPlanPage.hidden = true;
			}
			if (wholeLifePlanPage) {
				wholeLifePlanPage.hidden = true;
			}
			if (termPlanPage) {
				termPlanPage.hidden = true;
			}
			smoothScrollTo(pensionPlansDetail);
		});

		pensionPlanTrigger.addEventListener("keydown", (event) => {
			if (event.key === "Enter" || event.key === " ") {
				event.preventDefault();
				pensionPlansDetail.hidden = false;
				if (childPlansDetail) {
					childPlansDetail.hidden = true;
				}
				if (endowmentPlansDetail) {
					endowmentPlansDetail.hidden = true;
				}
				if (moneyBackPlansDetail) {
					moneyBackPlansDetail.hidden = true;
				}
				if (wholeLifePlansDetail) {
					wholeLifePlansDetail.hidden = true;
				}
				if (termPlansDetail) {
					termPlansDetail.hidden = true;
				}
				if (childPlanPage) {
					childPlanPage.hidden = true;
				}
				if (endowmentPlanPage) {
					endowmentPlanPage.hidden = true;
				}
				if (pensionPlanPage) {
					pensionPlanPage.hidden = true;
				}
				if (moneyBackPlanPage) {
					moneyBackPlanPage.hidden = true;
				}
				if (wholeLifePlanPage) {
					wholeLifePlanPage.hidden = true;
				}
				if (termPlanPage) {
					termPlanPage.hidden = true;
				}
				smoothScrollTo(pensionPlansDetail);
			}
		});
	}

	if (moneyBackPlanTrigger && moneyBackPlansDetail) {
		moneyBackPlanTrigger.addEventListener("click", () => {
			moneyBackPlansDetail.hidden = false;
			if (childPlansDetail) {
				childPlansDetail.hidden = true;
			}
			if (endowmentPlansDetail) {
				endowmentPlansDetail.hidden = true;
			}
			if (pensionPlansDetail) {
				pensionPlansDetail.hidden = true;
			}
			if (wholeLifePlansDetail) {
				wholeLifePlansDetail.hidden = true;
			}
			if (termPlansDetail) {
				termPlansDetail.hidden = true;
			}
			if (childPlanPage) {
				childPlanPage.hidden = true;
			}
			if (endowmentPlanPage) {
				endowmentPlanPage.hidden = true;
			}
			if (pensionPlanPage) {
				pensionPlanPage.hidden = true;
			}
			if (moneyBackPlanPage) {
				moneyBackPlanPage.hidden = true;
			}
			if (wholeLifePlanPage) {
				wholeLifePlanPage.hidden = true;
			}
			if (termPlanPage) {
				termPlanPage.hidden = true;
			}
			smoothScrollTo(moneyBackPlansDetail);
		});

		moneyBackPlanTrigger.addEventListener("keydown", (event) => {
			if (event.key === "Enter" || event.key === " ") {
				event.preventDefault();
				moneyBackPlansDetail.hidden = false;
				if (childPlansDetail) {
					childPlansDetail.hidden = true;
				}
				if (endowmentPlansDetail) {
					endowmentPlansDetail.hidden = true;
				}
				if (pensionPlansDetail) {
					pensionPlansDetail.hidden = true;
				}
				if (wholeLifePlansDetail) {
					wholeLifePlansDetail.hidden = true;
				}
				if (termPlansDetail) {
					termPlansDetail.hidden = true;
				}
				if (childPlanPage) {
					childPlanPage.hidden = true;
				}
				if (endowmentPlanPage) {
					endowmentPlanPage.hidden = true;
				}
				if (pensionPlanPage) {
					pensionPlanPage.hidden = true;
				}
				if (moneyBackPlanPage) {
					moneyBackPlanPage.hidden = true;
				}
				if (wholeLifePlanPage) {
					wholeLifePlanPage.hidden = true;
				}
				if (termPlanPage) {
					termPlanPage.hidden = true;
				}
				smoothScrollTo(moneyBackPlansDetail);
			}
		});
	}

	if (wholeLifePlanTrigger && wholeLifePlansDetail) {
		wholeLifePlanTrigger.addEventListener("click", () => {
			wholeLifePlansDetail.hidden = false;
			if (childPlansDetail) {
				childPlansDetail.hidden = true;
			}
			if (endowmentPlansDetail) {
				endowmentPlansDetail.hidden = true;
			}
			if (pensionPlansDetail) {
				pensionPlansDetail.hidden = true;
			}
			if (moneyBackPlansDetail) {
				moneyBackPlansDetail.hidden = true;
			}
			if (termPlansDetail) {
				termPlansDetail.hidden = true;
			}
			if (childPlanPage) {
				childPlanPage.hidden = true;
			}
			if (endowmentPlanPage) {
				endowmentPlanPage.hidden = true;
			}
			if (pensionPlanPage) {
				pensionPlanPage.hidden = true;
			}
			if (moneyBackPlanPage) {
				moneyBackPlanPage.hidden = true;
			}
			if (wholeLifePlanPage) {
				wholeLifePlanPage.hidden = true;
			}
			if (termPlanPage) {
				termPlanPage.hidden = true;
			}
			smoothScrollTo(wholeLifePlansDetail);
		});

		wholeLifePlanTrigger.addEventListener("keydown", (event) => {
			if (event.key === "Enter" || event.key === " ") {
				event.preventDefault();
				wholeLifePlansDetail.hidden = false;
				if (childPlansDetail) {
					childPlansDetail.hidden = true;
				}
				if (endowmentPlansDetail) {
					endowmentPlansDetail.hidden = true;
				}
				if (pensionPlansDetail) {
					pensionPlansDetail.hidden = true;
				}
				if (moneyBackPlansDetail) {
					moneyBackPlansDetail.hidden = true;
				}
				if (termPlansDetail) {
					termPlansDetail.hidden = true;
				}
				if (childPlanPage) {
					childPlanPage.hidden = true;
				}
				if (endowmentPlanPage) {
					endowmentPlanPage.hidden = true;
				}
				if (pensionPlanPage) {
					pensionPlanPage.hidden = true;
				}
				if (moneyBackPlanPage) {
					moneyBackPlanPage.hidden = true;
				}
				if (wholeLifePlanPage) {
					wholeLifePlanPage.hidden = true;
				}
				if (termPlanPage) {
					termPlanPage.hidden = true;
				}
				smoothScrollTo(wholeLifePlansDetail);
			}
		});
	}

	if (termPlanTrigger && termPlansDetail) {
		termPlanTrigger.addEventListener("click", () => {
			termPlansDetail.hidden = false;
			if (childPlansDetail) {
				childPlansDetail.hidden = true;
			}
			if (endowmentPlansDetail) {
				endowmentPlansDetail.hidden = true;
			}
			if (pensionPlansDetail) {
				pensionPlansDetail.hidden = true;
			}
			if (moneyBackPlansDetail) {
				moneyBackPlansDetail.hidden = true;
			}
			if (wholeLifePlansDetail) {
				wholeLifePlansDetail.hidden = true;
			}
			if (childPlanPage) {
				childPlanPage.hidden = true;
			}
			if (endowmentPlanPage) {
				endowmentPlanPage.hidden = true;
			}
			if (pensionPlanPage) {
				pensionPlanPage.hidden = true;
			}
			if (moneyBackPlanPage) {
				moneyBackPlanPage.hidden = true;
			}
			if (wholeLifePlanPage) {
				wholeLifePlanPage.hidden = true;
			}
			if (termPlanPage) {
				termPlanPage.hidden = true;
			}
			smoothScrollTo(termPlansDetail);
		});

		termPlanTrigger.addEventListener("keydown", (event) => {
			if (event.key === "Enter" || event.key === " ") {
				event.preventDefault();
				termPlansDetail.hidden = false;
				if (childPlansDetail) {
					childPlansDetail.hidden = true;
				}
				if (endowmentPlansDetail) {
					endowmentPlansDetail.hidden = true;
				}
				if (pensionPlansDetail) {
					pensionPlansDetail.hidden = true;
				}
				if (moneyBackPlansDetail) {
					moneyBackPlansDetail.hidden = true;
				}
				if (wholeLifePlansDetail) {
					wholeLifePlansDetail.hidden = true;
				}
				if (childPlanPage) {
					childPlanPage.hidden = true;
				}
				if (endowmentPlanPage) {
					endowmentPlanPage.hidden = true;
				}
				if (pensionPlanPage) {
					pensionPlanPage.hidden = true;
				}
				if (moneyBackPlanPage) {
					moneyBackPlanPage.hidden = true;
				}
				if (wholeLifePlanPage) {
					wholeLifePlanPage.hidden = true;
				}
				if (termPlanPage) {
					termPlanPage.hidden = true;
				}
				smoothScrollTo(termPlansDetail);
			}
		});
	}

	if (ulipPlanTrigger && ulipPlansDetail) {
		ulipPlanTrigger.addEventListener("click", () => {
			ulipPlansDetail.hidden = false;
			if (childPlansDetail) {
				childPlansDetail.hidden = true;
			}
			if (endowmentPlansDetail) {
				endowmentPlansDetail.hidden = true;
			}
			if (pensionPlansDetail) {
				pensionPlansDetail.hidden = true;
			}
			if (moneyBackPlansDetail) {
				moneyBackPlansDetail.hidden = true;
			}
			if (wholeLifePlansDetail) {
				wholeLifePlansDetail.hidden = true;
			}
			if (termPlansDetail) {
				termPlansDetail.hidden = true;
			}
			if (childPlanPage) {
				childPlanPage.hidden = true;
			}
			if (endowmentPlanPage) {
				endowmentPlanPage.hidden = true;
			}
			if (pensionPlanPage) {
				pensionPlanPage.hidden = true;
			}
			if (moneyBackPlanPage) {
				moneyBackPlanPage.hidden = true;
			}
			if (wholeLifePlanPage) {
				wholeLifePlanPage.hidden = true;
			}
			if (termPlanPage) {
				termPlanPage.hidden = true;
			}
			if (ulipPlanPage) {
				ulipPlanPage.hidden = true;
			}
			smoothScrollTo(ulipPlansDetail);
		});

		ulipPlanTrigger.addEventListener("keydown", (event) => {
			if (event.key === "Enter" || event.key === " ") {
				event.preventDefault();
				ulipPlansDetail.hidden = false;
				if (childPlansDetail) {
					childPlansDetail.hidden = true;
				}
				if (endowmentPlansDetail) {
					endowmentPlansDetail.hidden = true;
				}
				if (pensionPlansDetail) {
					pensionPlansDetail.hidden = true;
				}
				if (moneyBackPlansDetail) {
					moneyBackPlansDetail.hidden = true;
				}
				if (wholeLifePlansDetail) {
					wholeLifePlansDetail.hidden = true;
				}
				if (termPlansDetail) {
					termPlansDetail.hidden = true;
				}
				if (childPlanPage) {
					childPlanPage.hidden = true;
				}
				if (endowmentPlanPage) {
					endowmentPlanPage.hidden = true;
				}
				if (pensionPlanPage) {
					pensionPlanPage.hidden = true;
				}
				if (moneyBackPlanPage) {
					moneyBackPlanPage.hidden = true;
				}
				if (wholeLifePlanPage) {
					wholeLifePlanPage.hidden = true;
				}
				if (termPlanPage) {
					termPlanPage.hidden = true;
				}
				if (ulipPlanPage) {
					ulipPlanPage.hidden = true;
				}
				smoothScrollTo(ulipPlansDetail);
			}
		});
	}

	if (microPlanTrigger && microPlansDetail) {
		microPlanTrigger.addEventListener("click", () => {
			microPlansDetail.hidden = false;
			if (childPlansDetail) {
				childPlansDetail.hidden = true;
			}
			if (endowmentPlansDetail) {
				endowmentPlansDetail.hidden = true;
			}
			if (pensionPlansDetail) {
				pensionPlansDetail.hidden = true;
			}
			if (moneyBackPlansDetail) {
				moneyBackPlansDetail.hidden = true;
			}
			if (wholeLifePlansDetail) {
				wholeLifePlansDetail.hidden = true;
			}
			if (termPlansDetail) {
				termPlansDetail.hidden = true;
			}
			if (ulipPlansDetail) {
				ulipPlansDetail.hidden = true;
			}
			if (childPlanPage) {
				childPlanPage.hidden = true;
			}
			if (endowmentPlanPage) {
				endowmentPlanPage.hidden = true;
			}
			if (pensionPlanPage) {
				pensionPlanPage.hidden = true;
			}
			if (moneyBackPlanPage) {
				moneyBackPlanPage.hidden = true;
			}
			if (wholeLifePlanPage) {
				wholeLifePlanPage.hidden = true;
			}
			if (termPlanPage) {
				termPlanPage.hidden = true;
			}
			if (ulipPlanPage) {
				ulipPlanPage.hidden = true;
			}
			if (microPlanPage) {
				microPlanPage.hidden = true;
			}
			smoothScrollTo(microPlansDetail);
		});

		microPlanTrigger.addEventListener("keydown", (event) => {
			if (event.key === "Enter" || event.key === " ") {
				event.preventDefault();
				microPlansDetail.hidden = false;
				if (childPlansDetail) {
					childPlansDetail.hidden = true;
				}
				if (endowmentPlansDetail) {
					endowmentPlansDetail.hidden = true;
				}
				if (pensionPlansDetail) {
					pensionPlansDetail.hidden = true;
				}
				if (moneyBackPlansDetail) {
					moneyBackPlansDetail.hidden = true;
				}
				if (wholeLifePlansDetail) {
					wholeLifePlansDetail.hidden = true;
				}
				if (termPlansDetail) {
					termPlansDetail.hidden = true;
				}
				if (ulipPlansDetail) {
					ulipPlansDetail.hidden = true;
				}
				if (childPlanPage) {
					childPlanPage.hidden = true;
				}
				if (endowmentPlanPage) {
					endowmentPlanPage.hidden = true;
				}
				if (pensionPlanPage) {
					pensionPlanPage.hidden = true;
				}
				if (moneyBackPlanPage) {
					moneyBackPlanPage.hidden = true;
				}
				if (wholeLifePlanPage) {
					wholeLifePlanPage.hidden = true;
				}
				if (termPlanPage) {
					termPlanPage.hidden = true;
				}
				if (ulipPlanPage) {
					ulipPlanPage.hidden = true;
				}
				if (microPlanPage) {
					microPlanPage.hidden = true;
				}
				smoothScrollTo(microPlansDetail);
			}
		});
	}

	if (endowmentPlansBackBtn && endowmentPlansDetail) {
		endowmentPlansBackBtn.addEventListener("click", () => {
			endowmentPlansDetail.hidden = true;
			if (endowmentPlanPage) {
				endowmentPlanPage.hidden = true;
			}
			smoothScrollTo(document.getElementById("plans"));
		});
	}

	if (pensionPlansBackBtn && pensionPlansDetail) {
		pensionPlansBackBtn.addEventListener("click", () => {
			pensionPlansDetail.hidden = true;
			if (pensionPlanPage) {
				pensionPlanPage.hidden = true;
			}
			smoothScrollTo(document.getElementById("plans"));
		});
	}

	if (moneyBackPlansBackBtn && moneyBackPlansDetail) {
		moneyBackPlansBackBtn.addEventListener("click", () => {
			moneyBackPlansDetail.hidden = true;
			if (moneyBackPlanPage) {
				moneyBackPlanPage.hidden = true;
			}
			smoothScrollTo(document.getElementById("plans"));
		});
	}

	if (wholeLifePlansBackBtn && wholeLifePlansDetail) {
		wholeLifePlansBackBtn.addEventListener("click", () => {
			wholeLifePlansDetail.hidden = true;
			if (wholeLifePlanPage) {
				wholeLifePlanPage.hidden = true;
			}
			smoothScrollTo(document.getElementById("plans"));
		});
	}

	if (termPlansBackBtn && termPlansDetail) {
		termPlansBackBtn.addEventListener("click", () => {
			termPlansDetail.hidden = true;
			if (termPlanPage) {
				termPlanPage.hidden = true;
			}
			smoothScrollTo(document.getElementById("plans"));
		});
	}

	if (ulipPlansBackBtn && ulipPlansDetail) {
		ulipPlansBackBtn.addEventListener("click", () => {
			ulipPlansDetail.hidden = true;
			if (ulipPlanPage) {
				ulipPlanPage.hidden = true;
			}
			smoothScrollTo(document.getElementById("plans"));
		});
	}

	if (microPlansBackBtn && microPlansDetail) {
		microPlansBackBtn.addEventListener("click", () => {
			microPlansDetail.hidden = true;
			if (microPlanPage) {
				microPlanPage.hidden = true;
			}
			smoothScrollTo(document.getElementById("plans"));
		});
	}

	if (childPlanCards.length && childPlansDetail && childPlanPage) {
		childPlanCards.forEach((card, index) => {
			const openDetail = () => {
				renderChildPlanPage(currentLanguage, index);
				childPlanPage.hidden = false;
				smoothScrollTo(childPlanPage);
			};

			card.addEventListener("click", openDetail);
			card.addEventListener("keydown", (event) => {
				if (event.key === "Enter" || event.key === " ") {
					event.preventDefault();
					openDetail();
				}
			});
		});
	}

	if (childPlanPageBackBtn && childPlanPage) {
		childPlanPageBackBtn.addEventListener("click", () => {
			childPlanPage.hidden = true;
			smoothScrollTo(childPlansDetail);
		});
	}

	if (childPlanPrevBtn && childPlanPage) {
		childPlanPrevBtn.addEventListener("click", () => {
			renderChildPlanPage(currentLanguage, activeChildPlanIndex - 1);
			smoothScrollTo(childPlanPage);
		});
	}

	if (childPlanNextBtn && childPlanPage) {
		childPlanNextBtn.addEventListener("click", () => {
			renderChildPlanPage(currentLanguage, activeChildPlanIndex + 1);
			smoothScrollTo(childPlanPage);
		});
	}

	if (endowmentPlanCards.length && endowmentPlansDetail && endowmentPlanPage) {
		endowmentPlanCards.forEach((card, index) => {
			const openDetail = () => {
				renderEndowmentPlanPage(currentLanguage, index);
				endowmentPlanPage.hidden = false;
				smoothScrollTo(endowmentPlanPage);
			};

			card.addEventListener("click", openDetail);
			card.addEventListener("keydown", (event) => {
				if (event.key === "Enter" || event.key === " ") {
					event.preventDefault();
					openDetail();
				}
			});
		});
	}

	if (pensionPlanCards.length && pensionPlansDetail && pensionPlanPage) {
		pensionPlanCards.forEach((card, index) => {
			const openDetail = () => {
				renderPensionPlanPage(currentLanguage, index);
				pensionPlanPage.hidden = false;
				smoothScrollTo(pensionPlanPage);
			};

			card.addEventListener("click", openDetail);
			card.addEventListener("keydown", (event) => {
				if (event.key === "Enter" || event.key === " ") {
					event.preventDefault();
					openDetail();
				}
			});
		});
	}

	if (moneyBackPlanCards.length && moneyBackPlansDetail && moneyBackPlanPage) {
		moneyBackPlanCards.forEach((card, index) => {
			const openDetail = () => {
				renderMoneyBackPlanPage(currentLanguage, index);
				moneyBackPlanPage.hidden = false;
				smoothScrollTo(moneyBackPlanPage);
			};

			card.addEventListener("click", openDetail);
			card.addEventListener("keydown", (event) => {
				if (event.key === "Enter" || event.key === " ") {
					event.preventDefault();
					openDetail();
				}
			});
		});
	}

	if (wholeLifePlanCards.length && wholeLifePlansDetail && wholeLifePlanPage) {
		wholeLifePlanCards.forEach((card, index) => {
			const openDetail = () => {
				renderWholeLifePlanPage(currentLanguage, index);
				wholeLifePlanPage.hidden = false;
				smoothScrollTo(wholeLifePlanPage);
			};

			card.addEventListener("click", openDetail);
			card.addEventListener("keydown", (event) => {
				if (event.key === "Enter" || event.key === " ") {
					event.preventDefault();
					openDetail();
				}
			});
		});
	}

	if (termPlanCards.length && termPlansDetail && termPlanPage) {
		termPlanCards.forEach((card, index) => {
			const openDetail = () => {
				renderTermPlanPage(currentLanguage, index);
				termPlanPage.hidden = false;
				smoothScrollTo(termPlanPage);
			};

			card.addEventListener("click", openDetail);
			card.addEventListener("keydown", (event) => {
				if (event.key === "Enter" || event.key === " ") {
					event.preventDefault();
					openDetail();
				}
			});
		});
	}

	if (ulipPlanCards.length && ulipPlansDetail && ulipPlanPage) {
		ulipPlanCards.forEach((card, index) => {
			const openDetail = () => {
				renderUlipPlanPage(currentLanguage, index);
				ulipPlanPage.hidden = false;
				smoothScrollTo(ulipPlanPage);
			};

			card.addEventListener("click", openDetail);
			card.addEventListener("keydown", (event) => {
				if (event.key === "Enter" || event.key === " ") {
					event.preventDefault();
					openDetail();
				}
			});
		});
	}

	if (microPlanCards.length && microPlansDetail && microPlanPage) {
		microPlanCards.forEach((card, index) => {
			const openDetail = () => {
				renderMicroPlanPage(currentLanguage, index);
				microPlanPage.hidden = false;
				smoothScrollTo(microPlanPage);
			};

			card.addEventListener("click", openDetail);
			card.addEventListener("keydown", (event) => {
				if (event.key === "Enter" || event.key === " ") {
					event.preventDefault();
					openDetail();
				}
			});
		});
	}

	if (endowmentPlanPageBackBtn && endowmentPlanPage) {
		endowmentPlanPageBackBtn.addEventListener("click", () => {
			endowmentPlanPage.hidden = true;
			smoothScrollTo(endowmentPlansDetail);
		});
	}

	if (pensionPlanPageBackBtn && pensionPlanPage) {
		pensionPlanPageBackBtn.addEventListener("click", () => {
			pensionPlanPage.hidden = true;
			smoothScrollTo(pensionPlansDetail);
		});
	}

	if (moneyBackPlanPageBackBtn && moneyBackPlanPage) {
		moneyBackPlanPageBackBtn.addEventListener("click", () => {
			moneyBackPlanPage.hidden = true;
			smoothScrollTo(moneyBackPlansDetail);
		});
	}

	if (wholeLifePlanPageBackBtn && wholeLifePlanPage) {
		wholeLifePlanPageBackBtn.addEventListener("click", () => {
			wholeLifePlanPage.hidden = true;
			smoothScrollTo(wholeLifePlansDetail);
		});
	}

	if (termPlanPageBackBtn && termPlanPage) {
		termPlanPageBackBtn.addEventListener("click", () => {
			termPlanPage.hidden = true;
			smoothScrollTo(termPlansDetail);
		});
	}

	if (ulipPlanPageBackBtn && ulipPlanPage) {
		ulipPlanPageBackBtn.addEventListener("click", () => {
			ulipPlanPage.hidden = true;
			smoothScrollTo(ulipPlansDetail);
		});
	}

	if (microPlanPageBackBtn && microPlanPage) {
		microPlanPageBackBtn.addEventListener("click", () => {
			microPlanPage.hidden = true;
			smoothScrollTo(microPlansDetail);
		});
	}

	if (endowmentPlanPrevBtn && endowmentPlanPage) {
		endowmentPlanPrevBtn.addEventListener("click", () => {
			renderEndowmentPlanPage(currentLanguage, activeEndowmentPlanIndex - 1);
			smoothScrollTo(endowmentPlanPage);
		});
	}

	if (endowmentPlanNextBtn && endowmentPlanPage) {
		endowmentPlanNextBtn.addEventListener("click", () => {
			renderEndowmentPlanPage(currentLanguage, activeEndowmentPlanIndex + 1);
			smoothScrollTo(endowmentPlanPage);
		});
	}

	if (pensionPlanPrevBtn && pensionPlanPage) {
		pensionPlanPrevBtn.addEventListener("click", () => {
			renderPensionPlanPage(currentLanguage, activePensionPlanIndex - 1);
			smoothScrollTo(pensionPlanPage);
		});
	}

	if (pensionPlanNextBtn && pensionPlanPage) {
		pensionPlanNextBtn.addEventListener("click", () => {
			renderPensionPlanPage(currentLanguage, activePensionPlanIndex + 1);
			smoothScrollTo(pensionPlanPage);
		});
	}

	if (moneyBackPlanPrevBtn && moneyBackPlanPage) {
		moneyBackPlanPrevBtn.addEventListener("click", () => {
			renderMoneyBackPlanPage(currentLanguage, activeMoneyBackPlanIndex - 1);
			smoothScrollTo(moneyBackPlanPage);
		});
	}

	if (moneyBackPlanNextBtn && moneyBackPlanPage) {
		moneyBackPlanNextBtn.addEventListener("click", () => {
			renderMoneyBackPlanPage(currentLanguage, activeMoneyBackPlanIndex + 1);
			smoothScrollTo(moneyBackPlanPage);
		});
	}

	if (wholeLifePlanPrevBtn && wholeLifePlanPage) {
		wholeLifePlanPrevBtn.addEventListener("click", () => {
			renderWholeLifePlanPage(currentLanguage, activeWholeLifePlanIndex - 1);
			smoothScrollTo(wholeLifePlanPage);
		});
	}

	if (wholeLifePlanNextBtn && wholeLifePlanPage) {
		wholeLifePlanNextBtn.addEventListener("click", () => {
			renderWholeLifePlanPage(currentLanguage, activeWholeLifePlanIndex + 1);
			smoothScrollTo(wholeLifePlanPage);
		});
	}

	if (termPlanPrevBtn && termPlanPage) {
		termPlanPrevBtn.addEventListener("click", () => {
			renderTermPlanPage(currentLanguage, activeTermPlanIndex - 1);
			smoothScrollTo(termPlanPage);
		});
	}

	if (termPlanNextBtn && termPlanPage) {
		termPlanNextBtn.addEventListener("click", () => {
			renderTermPlanPage(currentLanguage, activeTermPlanIndex + 1);
			smoothScrollTo(termPlanPage);
		});
	}

	if (ulipPlanPrevBtn && ulipPlanPage) {
		ulipPlanPrevBtn.addEventListener("click", () => {
			renderUlipPlanPage(currentLanguage, activeUlipPlanIndex - 1);
			smoothScrollTo(ulipPlanPage);
		});
	}

	if (ulipPlanNextBtn && ulipPlanPage) {
		ulipPlanNextBtn.addEventListener("click", () => {
			renderUlipPlanPage(currentLanguage, activeUlipPlanIndex + 1);
			smoothScrollTo(ulipPlanPage);
		});
	}

	if (microPlanPrevBtn && microPlanPage) {
		microPlanPrevBtn.addEventListener("click", () => {
			renderMicroPlanPage(currentLanguage, activeMicroPlanIndex - 1);
			smoothScrollTo(microPlanPage);
		});
	}

	if (microPlanNextBtn && microPlanPage) {
		microPlanNextBtn.addEventListener("click", () => {
			renderMicroPlanPage(currentLanguage, activeMicroPlanIndex + 1);
			smoothScrollTo(microPlanPage);
		});
	}
};

const init = () => {
	setAllContactLinks();
	setupEventListeners();
	setupLanguageSwitcher();
	setupScrollReveal();
	setupStatsCounterAnimation();
	setupFaqAccordion();
	setupTrustBadgeEntrance();
	setupLeadFormHandler();
	updateHeaderAndBackToTopState();
	updateActiveNavByScroll();
};

init();
