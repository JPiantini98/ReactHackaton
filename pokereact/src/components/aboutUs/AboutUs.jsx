import React from 'react'

import './aboutUs.css'
import { Layout } from '../layout/Layout'
import awImage from './images/aw.png'
import jpImage from './images/jp.png'
import lmImage from './images/lm.png'
import ldImage from './images/ld.png'

export const AboutUs = () => {
    return (
        <Layout >
            <div class="bg-light mt-4 gradient">
                <div class="container py-5">
                    <div class="row mb-4">
                        <div class="col-lg-8">
                            <h2 class="display-4 font-weight-light white">The team</h2>
                            <p class="font-italic">We're a group of stars in the making, determined to tackle any challenge that may come our way.</p>
                        </div>
                    </div>
                    <div class="row text-center">
                        <div class="col-xl-3 col-sm-6 mb-5">
                            <div class="bg-white rounded shadow-sm py-5 px-4"><img src={awImage} alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                <h5 class="mb-0">Andrés Wazar</h5><span class="small text-uppercase text-muted">Developer</span>
                                <ul class="social mb-0 list-inline mt-3">
                                    <li class="list-inline-item"><a href="https://www.linkedin.com/in/andreswazar/?locale=en_US" target="_blank" class="social-link"><i class="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-xl-3 col-sm-6 mb-5">
                            <div class="bg-white rounded shadow-sm py-5 px-4"><img src={jpImage} alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                <h5 class="mb-0">Jorge Piantini</h5><span class="small text-uppercase text-muted">Developer</span>
                                <ul class="social mb-0 list-inline mt-3">
                                    <li class="list-inline-item"><a href="https://github.com/JPiantini98" class="social-link"><i class="fa fa-github"></i></a></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-xl-3 col-sm-6 mb-5">
                            <div class="bg-white rounded shadow-sm py-5 px-4"><img src={ldImage} alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                <h5 class="mb-0">Lisbeth Diaz</h5><span class="small text-uppercase text-muted">Developer</span>
                                <ul class="social mb-0 list-inline mt-3">
                                    <li class="list-inline-item"><a href="https://github.com/Lizzy015" class="social-link"><i class="fa fa-github"></i></a></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-xl-3 col-sm-6 mb-5">
                            <div class="bg-white rounded shadow-sm py-5 px-4"><img src={lmImage} alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                <h5 class="mb-0">Luis Mendoza</h5><span class="small text-uppercase text-muted">Developer</span>
                                <ul class="social mb-0 list-inline mt-3">
                                    <li class="list-inline-item"><a href="https://github.com/mmal73" class="social-link"><i class="fa fa-github"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
