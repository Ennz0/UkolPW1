/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

const homePage = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center gap-8 my-8 flex-wrap">
        <div className="card bg-base-300 w-96 shadow-sm">
          <figure>
            <Image src="/images/paris.avif" alt="Nike SB Dunk Low Paris" width={384} height={256} className="h-64 w-full object-cover" />
          </figure>
          <div className="card-body h-48">
            <h2 className="card-title">Nike SB Dunk Low "Paris"
              <div className="badge badge-error">ULTRA RARE</div>
            </h2>
            <p>Extrémně vzácná edice inspirovaná uměleckou scénou Paříže.</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Dunk SB</div>
              <div className="badge badge-outline">Limited</div>
              <div className="badge badge-outline">Art</div>
            </div>
          </div>
        </div>

        <div className="card bg-base-300 w-96 shadow-sm">
          <figure>
            <Image src="/images/chicago.avif" alt="Air Jordan 1 Retro High OG x Off-White Chicago" width={384} height={256} className="h-64 w-full object-cover" />
          </figure>
          <div className="card-body h-48">
            <h2 className="card-title">AJ1 x Off-White "Chicago"
              <div className="badge badge-success">GRAIL</div>
            </h2>
            <p>Jedna z nejžádanějších kolaborací Virgil Abloh x Jordan Brand.</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Jordan 1</div>
              <div className="badge badge-outline">Off-White</div>
              <div className="badge badge-outline">Kolekce</div>
            </div>
          </div>
        </div>

        <div className="card bg-base-300 w-96 shadow-sm">
          <figure>
            <Image src="/images/future.avif" alt="Nike Air Mag Back to the Future" width={384} height={256} className="h-64 w-full object-cover" />
          </figure>
          <div className="card-body h-48">
            <h2 className="card-title">Nike Air Mag "Back to the Future"
              <div className="badge badge-info">ICONIC</div>
            </h2>
            <p>Futuristické boty s automatickým šněrováním z filmu Návrat do budoucnosti.</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Film</div>
              <div className="badge badge-outline">Technologie</div>
              <div className="badge badge-outline">Limitovaná edice</div>
            </div>
          </div>
        </div>

        <div className="card bg-base-300 w-96 shadow-sm">
          <figure>
            <Image src="/images/pigeon.avif" alt="Nike SB Dunk Low Staple Pigeon" width={384} height={256} className="h-64 w-full object-cover" />
          </figure>
          <div className="card-body h-48">
            <h2 className="card-title">Nike SB Dunk Low "Pigeon"
              <div className="badge badge-warning">LEGENDARY</div>
            </h2>
            <p>Kontroverzní release, který v roce 2005 rozpoutal šílenství v ulicích NYC.</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Dunk SB</div>
              <div className="badge badge-outline">New York</div>
              <div className="badge badge-outline">Historie</div>
            </div>
          </div>
        </div>

        <div className="card bg-base-300 w-96 shadow-sm">
          <figure>
            <Image src="/images/travissail.avif" alt="Nike Air Force 1 Low Travis Scott Sail" width={384} height={256} className="h-64 w-full object-cover" />
          </figure>
          <div className="card-body h-48">
            <h2 className="card-title">AF1 x Travis Scott "Sail"
              <div className="badge badge-error">COLLAB</div>
            </h2>
            <p>Vyhledávaná kolaborace Air Force 1 s raperem Travisem Scottem.</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Air Force 1</div>
              <div className="badge badge-outline">Travis Scott</div>
              <div className="badge badge-outline">Hyped</div>
            </div>
          </div>
        </div>

        <div className="card bg-base-300 w-96 shadow-sm">
          <figure>
            <Image src="/images/kaws.avif" alt="Air Jordan 4 Retro x Kaws Grey" width={384} height={256} className="h-64 w-full object-cover" />
          </figure>
          <div className="card-body h-48">
            <h2 className="card-title">AJ4 x KAWS "Grey"
              <div className="badge badge-success">ART EDITION</div>
            </h2>
            <p>Umělecká kolaborace Air Jordan 4 s proslulým umělcem KAWS.</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Jordan 4</div>
              <div className="badge badge-outline">KAWS</div>
              <div className="badge badge-outline">Street Art</div>
            </div>
          </div>
        </div>

        <div className="card bg-base-300 w-96 shadow-sm">
          <figure>
            <Image src="/images/kanye.avif" alt="Nike Air Yeezy 2 Red October" width={384} height={256} className="h-64 w-full object-cover" />
          </figure>
          <div className="card-body h-48">
            <h2 className="card-title">Nike Air Yeezy 2 "Red October"
              <div className="badge badge-info">HISTORIC</div>
            </h2>
            <p>Poslední a nejtajemnější release Kanyeho s Nike, vzácný kousek.</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Yeezy</div>
              <div className="badge badge-outline">Kanye West</div>
              <div className="badge badge-outline">OG</div>
            </div>
          </div>
        </div>

        <div className="card bg-base-300 w-96 shadow-sm">
          <figure>
            <Image src="/images/skunk.avif" alt="Nike SB Dunk High Skunk" width={384} height={256} className="h-64 w-full object-cover" />
          </figure>
          <div className="card-body h-48">
            <h2 className="card-title">Nike SB Dunk High "Skunk"
              <div className="badge badge-warning">FIRE ASF</div>
            </h2>
            <p>Kultovní Dunk High inspirovaný konopím, oblíbený mezi sběrateli.</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Dunk SB</div>
              <div className="badge badge-outline">420</div>
              <div className="badge badge-outline">Rare</div>
            </div>
          </div>
        </div>

        <div className="card bg-base-300 w-96 shadow-sm">
          <figure>
            <Image src="/images/concord.avif" alt="Nike Air Jordan 11 Retro Concord" width={384} height={256} className="h-64 w-full object-cover" />
          </figure>
          <div className="card-body h-48">
            <h2 className="card-title">AJ11 "Concord"
              <div className="badge badge-error">BASKETBALL LEGEND</div>
            </h2>
            <p>Ikonická bota, ve které Michael Jordan hrál po návratu do NBA.</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Jordan 11</div>
              <div className="badge badge-outline">NBA</div>
              <div className="badge badge-outline">MJ</div>
            </div>
          </div>
        </div>

        <div className="card bg-base-300 w-96 shadow-sm">
          <figure>
            <Image src="/images/elephant.avif" alt="Nike Air Max 1 Atmos Elephant" width={384} height={256} className="h-64 w-full object-cover" />
          </figure>
          <div className="card-body h-48">
            <h2 className="card-title">Air Max 1 x Atmos "Elephant"
              <div className="badge badge-success">COLLAB</div>
            </h2>
            <p>Slavná kolaborace s japonským obchodem Atmos, známá pro svůj "elephant print".</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Air Max 1</div>
              <div className="badge badge-outline">Atmos</div>
              <div className="badge badge-outline">Print</div>
            </div>
          </div>
        </div>

        <div className="card bg-base-300 w-96 shadow-sm">
          <figure>
            <Image src="/images/freddy.avif" alt="Nike SB Dunk Low Freddy Krueger" width={384} height={256} className="h-64 w-full object-cover" />
          </figure>
          <div className="card-body h-48">
            <h2 className="card-title">Nike SB Dunk Low "Freddy Krueger"
              <div className="badge badge-info">HORROR</div>
            </h2>
            <p>Velmi vzácný a kontroverzní model inspirovaný filmovou postavou.</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Dunk SB</div>
              <div className="badge badge-outline">Horror</div>
              <div className="badge badge-outline">Unreleased</div>
            </div>
          </div>
        </div>

        <div className="card bg-base-300 w-96 shadow-sm">
          <figure>
            <Image src="/images/lv.avif" alt="Nike Air Force 1 Low Louis Vuitton" width={384} height={256} className="h-64 w-full object-cover" />
          </figure>
          <div className="card-body h-48">
            <h2 className="card-title">AF1 x Louis Vuitton
              <div className="badge badge-warning">LUXURY</div>
            </h2>
            <p>Exkluzivní a luxusní kolaborace mezi Nike a Louis Vuitton.</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Air Force 1</div>
              <div className="badge badge-outline">Louis Vuitton</div>
              <div className="badge badge-outline">Haute Couture</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default homePage