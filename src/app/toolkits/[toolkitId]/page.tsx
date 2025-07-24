
import { useParams } from 'next/navigation';

const ToolkitPageContent = () => {
    const toolkitMap: { [key: string]: { url: string; title: string } } = {
        'know-hemodialysis': {
            url: 'https://beandoc.github.io/know_hemodialysis/',
            title: 'Know Hemodialysis',
        },
        'ckd-assessment': {
            url: 'https://beandoc.github.io/ckdassessment/',
            title: 'CKD Assessment',
        },
        'aki-risk-assessment': {
            url: 'https://beandoc.github.io/AKI-risk-index/',
            title: 'AKI Risk Assessment',
        },
        'kidney-care-choices': {
            url: 'https://beandoc.github.io/Kidneycarechoices/',
            title: 'Kidney Care Choices',
        },
        'adpkd-road-map': {
            url: 'https://beandoc.github.io/adpkd/',
            title: 'ADPKD Road Map',
        },
        'biopsy-consent': {
            url: 'https://beandoc.github.io/Biopsyconsent/',
            title: 'Biopsy Consent',
        },
        'kidney-health-dashboard': {
            url: 'https://beandoc.github.io/kidneyhealthdashboard/',
            title: 'Kidney Health Dashboard',
        },
        'ckd-road-map': {
            url: 'https://beandoc.github.io/ckdroadmap/',
            title: 'Your CKD Road Map',
        },
    };
    
    const ToolkitPage = () => {
        const params = useParams();
        const toolkitId = params.toolkitId as string;
        const toolkit = toolkitMap[toolkitId];

        if (!toolkit) {
            return <div>Toolkit not found</div>;
        }

        return (
            <div>
                <h1>{toolkit.title}</h1>
                <iframe src={toolkit.url} width="100%" height="800px" />
            </div>
        );
    };

    return <ToolkitPage />;
};

export default ToolkitPageContent;
