import React from "react"

import { TextComponent } from "@/presentation/components/Text/TextComponent"
import { ScrollView, View } from "react-native"
import { HeaderDefaultComponent } from "@/presentation/components/Header/Default/HeaderDefaultComponent"
import { useTheme } from "@/presentation/theme/Theme"
import { usePolicyAndTermsScreenStyles } from "./PolicyAndTermsScreen.styles"
import { DividerComponent } from "@/presentation/components/Divider/DividerComponent"

export const PolicyAndTermsScreen: React.FC = () => {
  const theme = useTheme()
  const styles = usePolicyAndTermsScreenStyles()

  return (
    <ScrollView style={styles.container}>
      <HeaderDefaultComponent title="Politicas e termos de uso" goBack />

      <View style={styles.content}>
        <View>
          <TextComponent color={theme.white.light} size={20} weight={700}>
            1. Introdução
          </TextComponent>

          <DividerComponent color={theme.white.light} height={1} />

          <TextComponent color={theme.white.light} size={16} weight={500}>
            Bem-vindo ao Bluefin! Estes Termos de Uso regulam o acesso e o uso
            do aplicativo Bluefin ("Aplicativo"), uma plataforma destinada ao
            gerenciamento financeiro pessoal. Ao utilizar o Aplicativo, você
            concorda com estes Termos de Uso e com nossa Política de
            Privacidade, comprometendo-se a cumpri-los. Caso não concorde,
            pedimos que não utilize nossos serviços.
          </TextComponent>
        </View>

        <View>
          <TextComponent color={theme.white.light} size={20} weight={700}>
            2. Cadastro e Acesso
          </TextComponent>

          <DividerComponent color={theme.white.light} height={1} />

          <TextComponent color={theme.white.light} size={16} weight={500}>
            Para utilizar o Bluefin, você deve criar uma conta fornecendo
            informações verdadeiras e atualizadas. Você é responsável por manter
            a confidencialidade de suas credenciais de acesso e por todas as
            atividades realizadas em sua conta. Caso identifique qualquer uso
            indevido de sua conta, entre em contato imediatamente conosco.
          </TextComponent>
        </View>

        <View>
          <TextComponent color={theme.white.light} size={20} weight={700}>
            3. Uso do Aplicativo
          </TextComponent>

          <DividerComponent color={theme.white.light} height={1} />

          <TextComponent color={theme.white.light} size={16} weight={500}>
            O Bluefin é fornecido para fins de gestão financeira pessoal e não
            substitui consultorias financeiras profissionais. O usuário é
            responsável por suas decisões financeiras e pelo uso correto das
            informações fornecidas pelo Aplicativo. Você se compromete a não
            utilizar o Bluefin para atividades ilegais, ofensivas ou que
            infrinjam direitos de terceiros.
          </TextComponent>
        </View>

        <View>
          <TextComponent color={theme.white.light} size={20} weight={700}>
            4. Privacidade e Proteção de Dados
          </TextComponent>

          <DividerComponent color={theme.white.light} height={1} />

          <TextComponent color={theme.white.light} size={16} weight={500}>
            O Bluefin segue as diretrizes da Lei Geral de Proteção de Dados
            (LGPD - Lei nº 13.709/2018), garantindo a segurança e a
            transparência no tratamento de dados pessoais. Podemos coletar
            informações fornecidas por você, como nome, e-mail e dados
            financeiros inseridos no Aplicativo, que são utilizadas para
            personalizar sua experiência, melhorar nossos serviços, garantir a
            segurança da plataforma e cumprir obrigações legais. Não
            compartilhamos seus dados com terceiros sem sua autorização, exceto
            quando exigido por lei ou para fornecer serviços essenciais ao
            funcionamento do Aplicativo. Você pode solicitar a correção,
            exclusão ou acesso aos seus dados a qualquer momento, entrando em
            contato através dos canais de atendimento do Bluefin.
          </TextComponent>
        </View>

        <View>
          <TextComponent color={theme.white.light} size={20} weight={700}>
            5. Responsabilidades e Isenção de Garantias
          </TextComponent>

          <DividerComponent color={theme.white.light} height={1} />

          <TextComponent color={theme.white.light} size={16} weight={500}>
            Nos esforçamos para garantir a melhor experiência possível, mas não
            garantimos que o Aplicativo estará sempre livre de falhas ou
            indisponibilidades. O uso do Bluefin é de sua inteira
            responsabilidade. Não nos responsabilizamos por eventuais prejuízos
            financeiros decorrentes do uso do Aplicativo.
          </TextComponent>
        </View>

        <View>
          <TextComponent color={theme.white.light} size={20} weight={700}>
            6. Alterações nos Termos de Uso
          </TextComponent>

          <DividerComponent color={theme.white.light} height={1} />

          <TextComponent color={theme.white.light} size={16} weight={500}>
            Podemos atualizar estes Termos a qualquer momento. Notificaremos os
            usuários sobre alterações significativas e, ao continuar utilizando
            o Bluefin, você concorda com as novas condições.
          </TextComponent>
        </View>

        <View>
          <TextComponent color={theme.white.light} size={20} weight={700}>
            7. Contato
          </TextComponent>

          <DividerComponent color={theme.white.light} height={1} />

          <TextComponent color={theme.white.light} size={16} weight={500}>
            Para dúvidas ou solicitações relacionadas aos Termos de Uso, entre
            em contato conosco pelo e-mail contato.bluefin@gmail.com.
          </TextComponent>
        </View>

        <View>
          <DividerComponent color={theme.white.light} height={1} />

          <TextComponent color={theme.white.light} size={16} weight={500}>
            Ao utilizar o Bluefin, você confirma que leu e concorda com estes
            Termos de Uso.
          </TextComponent>
        </View>
      </View>
    </ScrollView>
  )
}
