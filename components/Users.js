/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { FiMapPin } from 'react-icons/fi'

export default function Users ( { usersData } )
{
  console.log( usersData )
  const { users } = usersData;
  return (
    <div className="container">
      {
        users.map( ( user ) =>
        {
          return (
            <div key={ user.id } className="profile-card">
              <header>
                <Link href={ `/users/${ user.id }` }>
                  <a>
                    <img
                      className="card-img"
                      src={ user.image }
                      alt={ user.firstName }
                    />
                  </a>

                </Link>
                <h1>
                  { user.firstName }
                </h1>
                <h2>
                  <FiMapPin /> { user.address.address }
                </h2>


              </header>

              <div className="card-body text-center">


              </div>



            </div>

          )
        } )
      }
    </div>
  )
}