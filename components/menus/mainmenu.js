//import React from "react";
import { useQuery } from "@apollo/client";
import { client } from "../../lib/apollo";
import { gql } from "@apollo/client";
import React, { useState } from "react";

export default function MainMenu() {
  const GET_MENU = gql`
    query GetMainMenu {
      menu(idType: NAME, id: "ReactMenu") {
        menuItems {
          nodes {
            label
            path
            childItems {
              nodes {
                label
                path
                childItems {
                  nodes {
                    path
                    label
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  const { data, loading } = useQuery(GET_MENU);

  return (
    <div>
      {!loading && (
        <nav>
          <ul>
            {data.menu.menuItems.nodes.map((item, index) => {
              return (
                <li key={index}>
                  {item.label}
                  {item.childItems.nodes.length > 0 && (
                    <ul className="sub-menu">
                      {item.childItems.nodes.map((item, index) => {
                        return <li key={index}>{item.label}</li>;
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      )}
      {loading && <p>Loading menu</p>}
    </div>
  );
}
