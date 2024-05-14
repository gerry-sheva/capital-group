import { Service } from '../type'

import consultingAnimation from '@/public/animations/consulting.json'
import financialAnimation from '@/public/animations/financial.json'
import investmentAnimation from '@/public/animations/investment.json'
import itAnimation from '@/public/animations/it.json'
import networkAnimation from '@/public/animations/network.json'
import systemsAnimation from '@/public/animations/systems.json'

const services: Service[] = [
	{
		lottie: consultingAnimation,
		num: '01',
		service: 'Management Consulting',
		desc: `Capital Group implements effective program strategies for our clients,
        combining pragmatism with ingenuity and innovation. We have an
        extensive track record of turning business objectives into successful
        program and acquisition strategies, planning documents, and
        performance targets.`,
		bullets: [
			'Acquisition Strategy Development',
			'Program Oversight and Control',
			'Source Evaluation Expertise',
			'Market Research Analysis',
			'Portfolio/Program Management',
		],
	},
	{
		lottie: systemsAnimation,
		num: '02',
		service: 'Systems Engineering',
		desc: `Capital Group combines comprehensive systems engineering disciplines and years of real-world technical expertise in its projects. Our expertise includes system architecture and design, statistical analysis, RMA analysis, and specializations in  network, software, information security and safety engineering, Our aim: Crafting best-value solutions for our clients.`,
		bullets: [
			'Requirements Development',
			'Cyber Security & Information Assurance',
			'Enterprise Architecture Design',
			'Technical Assessments',
			'Data Analytics',
		],
	},
	{
		lottie: networkAnimation,
		num: '03',
		service: 'Network Telecom Planning',
		desc: `We provide network and telecommunications subject matter expertise, including requirements development, network design validation, transition planning/execution, and operations management. We also offer Cloud computing service implementation support, complex network telecommunication, and modern and legacy application integration, including network security architecture development for NIST SP 800-53 compliance.`,
		bullets: [
			'Requirements Analysis',
			'Optimization',
			'Capacity Planning',
			'Security Management',
			'Test and Evaluation',
		],
	},
	{
		lottie: investmentAnimation,
		num: '04',
		service: 'Business Case & Investment Analysis',
		desc: `Capital Group provides comprehensive investment analysis by evaluating viable alternatives and employing, cost benefits determination. We  develop viable business cases that use targeted qualitative data as the key pillar of success. We also offer expert analysis in determining scope, benefits, costs, interdependencies, and risk analysis.`,
		bullets: [
			'Cost/Benefit Analysis',
			'Life Cycle Cost Estimate (LCCE) Modeling',
			'Risk Analysis',
			'Business Case Development',
			'Alternatives Analysis',
		],
	},
	{
		lottie: financialAnimation,
		num: '05',
		service: 'Business & Financial Management',
		desc: `We have extensive experience in a full range of business and financial management services. Our experience with Federal budget formulation, justification, and execution processes ensures client budgets are properly managed and aligned to program plans, missions, and regulatory requirements. Our clients' budgets are carefully monitored and managed to adapt to frequently fluctuating fiscal budgets.`,
		bullets: [
			'Business & Financial Management Oversight',
			'Program Control including EVM',
			'Budget Analysis, Planning & Formulation',
			'OMB Exhibit 300 Reporting',
			'Budget Execution and Tracking',
		],
	},
	{
		lottie: itAnimation,
		num: '06',
		service: 'Information Technology',
		desc: `Our information technology experts can assist with development, implementation, and support of any computer-based information system that supports mission-critical operations. Our professionals can deploy a wide array of technologies and solutions to help clients achieve their strategic IT goals. Our experts satisfy client strategic goals through adherence to industry best practices (e.g., PMI, ITIL).`,
		bullets: [
			'IT Project Management',
			'SharePoint Development and Administration',
			'Database Design and Management',
			'Business Intelligence',
			'Data Analytics and Visualization',
		],
	},
]

export default services
