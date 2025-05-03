
'use client';

import CvIntro from '@/components/CvIntro';
import Separator from '@/components/Separator';
import CvExperiences from '@/components/CvExperiences';
import CvSkills from '@/components/CvSkills';
import CvTools from '@/components/CvTools';
import CvLeisure from '@/components/CvLeisure';
import CvTravels from '@/components/CvTravels';

export default function Cv() {
    return (
        <div className="w-full max-w-5xl mx-auto p-8 space-y-8">
            <CvIntro />
            <Separator />
            <CvExperiences />
            <CvSkills />
            <Separator />
            <CvTools />
            <Separator />
            <CvLeisure />
            <Separator />
            <CvTravels />
        </div>
    );
}
