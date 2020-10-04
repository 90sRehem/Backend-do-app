import { container } from 'tsyringe'
import mailConfig from '@config/mail'

import IMailProvider from './models/IMailProvider'

import EtherealMailProviders from './implementations/EtherealMailProviders'
import SESMailProvider from './implementations/SESMailProvider'

const providers = {
  ethereal: container.resolve(EtherealMailProviders),
  ses: container.resolve(SESMailProvider)
}

container.registerInstance<IMailProvider>(
  'MailProvider',
  providers[mailConfig.driver]
)
