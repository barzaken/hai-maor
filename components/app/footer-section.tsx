import Container from '@/components/ui/container';

export function FooterSection() {
  return (
    <footer dir="rtl" className="relative py-8 md:py-10">
      <Container className="flex flex-col gap-4 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>חי מאור . במה עסקית למנהלים, יזמים וצוותים</p>
        <div className="flex items-center gap-4">
          <a href="#contact" className="underline underline-offset-4">
            יצירת קשר
          </a>
          <a href="#" className="underline underline-offset-4">
            אינסטגרם
          </a>
          <a href="#" className="underline underline-offset-4">
            לינקדאין
          </a>
        </div>
      </Container>
    </footer>
  );
}
