import { Droplet, Snowflake, Paintbrush, PenLineIcon as PipeCorner, Package } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Component() {
  return (
    <section className="w-full py-12 bg-[#2B54B8]">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-8">УСЛУГИ</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-[#2B54B8] border-white/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="relative w-16 h-16">
                  <div className="w-16 h-16 bg-gray-800 rounded-full" />
                  <div className="absolute right-0 bottom-0 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <Droplet className="w-4 h-4 text-[#2B54B8]" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-white/90 leading-relaxed">
                    Нанесение антикоррозионных покрытий (двух и трёхслойных) на основе экструдированного полиэтилена на наружную поверхность стальных труб
                  </p>
                </div>
              </div>
              <Button variant="outline" className="mt-6 w-full text-white border-white hover:bg-white/10">
                Заказать
              </Button>
            </CardContent>
          </Card>
          <Card className="bg-[#2B54B8] border-white/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="relative w-16 h-16">
                  <div className="w-16 h-16 bg-gray-800 rounded-full" />
                  <div className="absolute right-0 bottom-0 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <Snowflake className="w-4 h-4 text-[#2B54B8]" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-white/90 leading-relaxed">
                    Нанесение тепловой изоляции из пенополиуретана (ППУ) в защитной оболочке на трубы и соединительные детали стальные диаметром от 57 до 1420 мм
                  </p>
                </div>
              </div>
              <Button variant="outline" className="mt-6 w-full text-white border-white hover:bg-white/10">
                Заказать
              </Button>
            </CardContent>
          </Card>
          <Card className="bg-[#2B54B8] border-white/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="relative w-16 h-16">
                  <div className="w-16 h-16 bg-gray-800 rounded-full" />
                  <div className="absolute right-0 bottom-0 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <Paintbrush className="w-4 h-4 text-[#2B54B8]" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-white/90 leading-relaxed">
                    Нанесение любых лакокрасочных покрытий на внутреннюю и наружную поверхность стальных труб (внутреннее противокоррозионное покрытие из высоковязких эпоксидных материалов)
                  </p>
                </div>
              </div>
              <Button variant="outline" className="mt-6 w-full text-white border-white hover:bg-white/10">
                Заказать
              </Button>
            </CardContent>
          </Card>
          <Card className="bg-[#2B54B8] border-white/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="relative w-16 h-16">
                  <div className="w-16 h-16 bg-gray-800 rounded-full" />
                  <div className="absolute right-0 bottom-0 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <PipeCorner className="w-4 h-4 text-[#2B54B8]" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-white/90 leading-relaxed">
                    Изготовление гнутых отводов методом холодного гнутья из стальных труб
                  </p>
                </div>
              </div>
              <Button variant="outline" className="mt-6 w-full text-white border-white hover:bg-white/10">
                Заказать
              </Button>
            </CardContent>
          </Card>
          <Card className="bg-[#2B54B8] border-white/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="relative w-16 h-16">
                  <div className="w-16 h-16 bg-gray-800 rounded-full" />
                  <div className="absolute right-0 bottom-0 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <Package className="w-4 h-4 text-[#2B54B8]" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-white/90 leading-relaxed">
                    Поставка термоплавких карандашей для ремонта изоляции
                  </p>
                </div>
              </div>
              <Button variant="outline" className="mt-6 w-full text-white border-white hover:bg-white/10">
                Заказать
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}