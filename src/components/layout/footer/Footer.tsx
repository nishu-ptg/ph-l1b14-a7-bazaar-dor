import Container from "@/components/shared/Container";

function Footer() {
  return (
    <footer className="bg-white border-t border-zinc-200">
      <Container>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 px-4 py-6 text-sm">
          <p>বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।</p>

          <p>সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
