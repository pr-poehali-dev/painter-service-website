import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { toast } from "sonner";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const services = [
    {
      icon: "Home",
      title: "Покраска стен",
      description: "Качественная покраска внутренних стен любой сложности с идеально ровным покрытием",
      price: "от 300 ₽/м²"
    },
    {
      icon: "Move",
      title: "Покраска потолков",
      description: "Профессиональная покраска потолков с предварительной подготовкой поверхности",
      price: "от 350 ₽/м²"
    },
    {
      icon: "Building2",
      title: "Покраска фасадов",
      description: "Фасадные работы с использованием атмосферостойких материалов премиум-класса",
      price: "от 450 ₽/м²"
    },
    {
      icon: "Palette",
      title: "Декоративная отделка",
      description: "Эксклюзивные декоративные покрытия, венецианская штукатурка, художественная роспись",
      price: "от 800 ₽/м²"
    }
  ];

  const portfolio = [
    {
      image: "https://cdn.poehali.dev/projects/2e54832d-b4ca-4a27-bdb7-b653978309f5/files/f0331a5b-dda2-4cee-98b1-378f1fa330aa.jpg",
      title: "Покраска квартиры",
      description: "Современный стиль"
    },
    {
      image: "https://cdn.poehali.dev/projects/2e54832d-b4ca-4a27-bdb7-b653978309f5/files/f7cedb66-5d19-417b-b42f-4c3e34a57a57.jpg",
      title: "Фасад частного дома",
      description: "Яркие акценты"
    },
    {
      image: "https://cdn.poehali.dev/projects/2e54832d-b4ca-4a27-bdb7-b653978309f5/files/994cdb71-688c-4dbd-b46e-e87b1208fa27.jpg",
      title: "Декоративная отделка",
      description: "Элитный интерьер"
    }
  ];

  const testimonials = [
    {
      name: "Анна Петрова",
      text: "Отличная работа! Покрасили всю квартиру за 3 дня. Аккуратно, качественно, без лишней пыли. Рекомендую!",
      rating: 5
    },
    {
      name: "Дмитрий Иванов",
      text: "Делали фасад дома. Результат превзошел ожидания. Мастер посоветовал идеальное цветовое решение.",
      rating: 5
    },
    {
      name: "Елена Смирнова",
      text: "Декоративная штукатурка в гостиной — просто шедевр! Все гости в восторге. Спасибо за профессионализм!",
      rating: 5
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      toast.error("Заполните имя и телефон");
      return;
    }
    toast.success("Заявка отправлена! Мы свяжемся с вами в ближайшее время");
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Paintbrush" className="text-primary" size={28} />
            <span className="text-2xl font-bold text-primary">МаляРУ</span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
            <a href="#prices" className="hover:text-primary transition-colors">Цены</a>
            <a href="#about" className="hover:text-primary transition-colors">О мастере</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button asChild>
            <a href="#contact">Заказать звонок</a>
          </Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 via-white to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Профессиональные <span className="text-primary">малярные работы</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Качественная покраска стен, потолков и фасадов. Декоративные покрытия любой сложности. 
                Опыт работы более 12 лет.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-lg px-8" asChild>
                  <a href="#contact">Получить консультацию</a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                  <a href="#portfolio">Наши работы</a>
                </Button>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-6">
                <div>
                  <div className="text-4xl font-bold text-primary">12+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">проектов</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">гарантия</div>
                </div>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/2e54832d-b4ca-4a27-bdb7-b653978309f5/files/f0331a5b-dda2-4cee-98b1-378f1fa330aa.jpg"
                alt="Малярные работы"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">Полный спектр малярных работ для вашего дома</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50"
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{service.description}</p>
                  <div className="text-2xl font-bold text-primary">{service.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Портфолио работ</h2>
            <p className="text-xl text-muted-foreground">Примеры наших реализованных проектов</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-white/90">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Прозрачные цены</h2>
            <p className="text-xl text-muted-foreground">Стоимость работ без скрытых платежей</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {services.map((service, index) => (
                    <div key={index} className="flex justify-between items-center pb-4 border-b last:border-b-0">
                      <div>
                        <h4 className="font-semibold text-lg">{service.title}</h4>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                      <div className="text-2xl font-bold text-primary whitespace-nowrap ml-4">
                        {service.price}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-primary/5 rounded-lg">
                  <p className="text-sm text-center">
                    <Icon name="Info" className="inline mr-2" size={16} />
                    Точная стоимость рассчитывается после осмотра объекта. Выезд замерщика — бесплатно!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gradient-to-br from-secondary/10 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">О мастере</h2>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                <Icon name="User" size={64} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Александр Малярский</h3>
              <div className="text-lg text-muted-foreground space-y-4">
                <p>
                  Профессиональный маляр с 12-летним опытом работы. Выполнил более 500 проектов — 
                  от простой покраски до эксклюзивных декоративных покрытий.
                </p>
                <p>
                  Работаю только с качественными материалами ведущих производителей. 
                  Каждый проект — это индивидуальный подход и внимание к деталям.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-8">
                  <div className="flex items-center justify-center gap-2">
                    <Icon name="Award" className="text-primary" size={24} />
                    <span className="font-semibold">Сертифицированный специалист</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Icon name="Shield" className="text-primary" size={24} />
                    <span className="font-semibold">Гарантия 2 года</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Icon name="Clock" className="text-primary" size={24} />
                    <span className="font-semibold">Соблюдение сроков</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground">Что говорят о нашей работе</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                  <div className="font-semibold">{review.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Оставьте заявку</h2>
              <p className="text-xl text-white/90">Свяжемся с вами в течение 15 минут</p>
            </div>
            <Card className="border-0 shadow-2xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Ваше имя</label>
                    <Input 
                      placeholder="Введите имя"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="text-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Телефон</label>
                    <Input 
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="text-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Сообщение (опционально)</label>
                    <Textarea 
                      placeholder="Расскажите о вашем проекте..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                      className="text-lg"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full text-lg">
                    Отправить заявку
                  </Button>
                </form>
                <div className="mt-8 pt-8 border-t space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" className="text-primary" size={24} />
                    <span className="text-lg">+7 (999) 123-45-67</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Mail" className="text-primary" size={24} />
                    <span className="text-lg">info@malyar.ru</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="MapPin" className="text-primary" size={24} />
                    <span className="text-lg">Москва и Московская область</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Paintbrush" size={28} />
                <span className="text-2xl font-bold">МаляРУ</span>
              </div>
              <p className="text-white/70">
                Профессиональные малярные работы в Москве и области
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <div className="space-y-2">
                <a href="#services" className="block text-white/70 hover:text-white transition-colors">Услуги</a>
                <a href="#portfolio" className="block text-white/70 hover:text-white transition-colors">Портфолио</a>
                <a href="#prices" className="block text-white/70 hover:text-white transition-colors">Цены</a>
                <a href="#about" className="block text-white/70 hover:text-white transition-colors">О мастере</a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-white/70">
                <p>+7 (999) 123-45-67</p>
                <p>info@malyar.ru</p>
                <p>Москва и МО</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50">
            <p>&copy; 2024 МаляРУ. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
