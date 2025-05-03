'use client';

import CvIntro from '@/components/cv/CvIntro';
import Separator from '@/components/Separator';
import CvExperiences from '@/components/cv/CvExperiences';
import CvSkills from '@/components/cv/CvSkills';
import CvTools from '@/components/cv/CvTools';
import CvLeisure from '@/components/cv/CvLeisure';
import CvTravels from '@/components/cv/CvTravels';

export default function Cv() {
    return (
        <div className="w-full max-w-screen-xl mx-auto px-6 lg:px-12 py-10 space-y-12">
            <CvIntro />
            <Separator />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Colonne gauche : expériences (2/3) */}
                <CvExperiences />

                {/* Colonne droite : le reste (1/3) */}
                <div className="space-y-8">
                    <CvSkills />
                    <Separator />
                    <CvTools />
                    <Separator />
                    <CvLeisure />
                    <Separator />
                    <CvTravels />
                </div>
            </div>
        </div>
    );
}
