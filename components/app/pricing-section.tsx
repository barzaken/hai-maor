import { FullWidthDivider } from "@/components/ui/full-width-divider";
import { Button } from "@/components/ui/button";
import { CheckIcon } from "lucide-react";

type PricingPlan = {
    name: string;
    price: string;
    period?: string;
    description: string;
    href?: string;
    featuresTitle: string;
    features: string[];
    isPopular?: boolean;
};

const pricingPlans: PricingPlan[] = [
    {
        name: "דרך משותפת",
        href: "#",
        price: "ליווי מתמשך",
        description:
            "יוצאים לדרך משותפת ללא הגבלת זמן אך עם מטרה אחת ברורה - להפוך אתכם לאנשים שיכולים להוביל - פרוייקט, צוות, הרצאה או כל ממשק עסקי.",
        featuresTitle: "מה כולל המסלול:",
        features: [
            "ליווי אישי ללא הגבלת זמן",
            "חיזוק מנהיגות תקשורתית בשטח",
            "עבודה לפי יעדים אמיתיים של העסק",
            "תרגול והתאמה לכל ממשק עסקי",
        ],
    },
    {
        name: "אומנות הפרזנטציה - 6 מפגשים",
        isPopular: true,
        href: "#",
        price: "6 מפגשים",
        description: "חבילה מלאה לבניית נוכחות, מסר וביצוע ברמה עקבית ומקצועית.",
        featuresTitle: "מה כולל המסלול:",
        features: [
            "בניית מסר ברור ומשכנע",
            "עבודה עקבית על פרזנטציה מקצועית",
            "שילוב סטוריטלינג עסקי בתהליך",
            "ליווי יישומי בין המפגשים",
        ],
    },
    {
        name: "סדנה יומית",
        price: "יום מלא",
        description:
            "סדנה המועברת על גבי יום שלם בה אלמד אתכם את יסודות ועיקרונות הפרזנטציה ועמידה מול קהל ומצלמה.",
        featuresTitle: "מה כולל המסלול:",
        features: [
            "הכנה פרקטית לעמידה מול קהל",
            "תרגול מול מצלמה עם משוב בזמן אמת",
            "שיפור נוכחות, קול ושפת גוף",
        ],
        href: "#",
    },

];

export function PricingSection() {
    return (
        <section dir="rtl" className="mx-auto min-hscreen place-content-center pt-4">
            <div className="relative">
                {/* <FullWidthDivider /> */}
                <div className="space-y-px bg-border">
                    <div className="flex flex-col bg-background p-8">
                        <p className="mb-6 text-muted-foreground text-sm uppercase tracking-wider">
                            מסלולי עבודה
                        </p>
                        <h1 className="font-bold text-3xl leading-tight md:text-5xl">
                            שבטוח נוכל לעבוד ביחד
                        </h1>
                    </div>
                    <div className="grid grid-cols-1 gap-px md:grid-cols-2 lg:grid-cols-3">
                        {[...pricingPlans].reverse().map((plan) => (
                            <PricingCard key={plan.name} plan={plan} />
                        ))}
                    </div>
                </div>
                {/* <FullWidthDivider /> */}
            </div>
        </section>
    );
}

function PricingCard({ plan }: { plan: PricingPlan }) {
    return (
        <div className="flex flex-col bg-background *:px-4 *:py-6">
            <div className="border-b">
                <p className="mb-6 text-muted-foreground text-sm uppercase tracking-wider">
                    {plan.name}
                </p>
                <div className="mb-2 flex items-baseline gap-2">
                    <h2 className="font-bold text-4xl">{plan.price}</h2>
                    {plan.period && (
                        <span className="text-muted-foreground text-xs">
                            / {plan.period}
                        </span>
                    )}
                </div>
                <p className="mb-8 line-clamp-1 text-muted-foreground">
                    {plan.description}
                </p>

                <Button
                    render={<a href={plan.href} />}
                    className="w-full"
                    variant={plan.isPopular ? "default" : "outline"}
                >
                    נתחיל לעבוד
                </Button>
            </div>

            <div className="space-y-3 text-muted-foreground text-sm">
                <p className="mb-6 text-xs uppercase">{plan.featuresTitle}</p>

                {plan.features.map((feature) => (
                    <p
                        className="flex items-center gap-2 text-foreground/80"
                        key={feature}
                    >
                        <CheckIcon className="size-4" />
                        {feature}
                    </p>
                ))}
            </div>
        </div>
    );
}
